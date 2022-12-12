import { download, drag, image, paint, share } from "./actions";
import { Payload, Saga } from "redux-chill";
import { all, put, select } from "redux-saga/effects";
import { Store } from "@redux";
import { LocalStorageService } from "@core/services/local-storage.service";
import { downloadURI, Figure, Position } from "@core/shared";
import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";

class CanvasSaga {
  @Saga()
  public *init() {}

  @Saga(drag.end)
  public *onDragEnd(payload: Payload<typeof drag["end"]>) {
    const { figures, drag: dragState }: Store["canvas"] = yield select(
      (store: Store) => store.canvas
    );

    const figure = figures.find((figure) => figure.id === dragState.id);

    if (figure) {
      const imagePos = {
        ...figure,
        x: payload.x,
        y: payload.y,
        rotation: 0,
        scaleX: 1,
        scaleY: 1,
      };
      /**
       * Add image to redux and clear drag state
       */
      yield all([put(image.add(imagePos)), put(drag())]);
    }
  }

  @Saga(image.add)
  public *onImageAdd(
    payload: Payload<typeof image["add"]>,
    { localStorageService }: { localStorageService: LocalStorageService }
  ) {
    const images = localStorageService.get("images") || [];

    images.push(payload);

    localStorageService.set("images", images);

    const stage: Konva.Stage = yield select(
      (store: Store) => store.canvas.stage
    );

    const [layer] = stage.getLayers();

    const imageObj = new Image();
    imageObj.src = payload.href;

    const konvaImage = new Konva.Image({
      x: payload.x,
      y: payload.y,
      image: imageObj,
      id: `${payload.id}`, // for typescript
    });
    layer.add(konvaImage);

    konvaImage.on("transformend", function (evt) {
      const position = {
        id: payload.id,
        x: konvaImage.x(),
        y: konvaImage.y(),
        rotation: konvaImage.rotation(),
        scaleX: konvaImage.scaleX(),
        scaleY: konvaImage.scaleY(),
      };

      const images = localStorageService.get("images") || [];

      const index = images.findIndex((image) => image.id === payload.id);

      if (index >= 0) {
        images[index].x = position.x;
        images[index].y = position.y;
        images[index].rotation = position.rotation;
        images[index].scaleX = position.scaleX;
        images[index].scaleY = position.scaleY;
      }

      localStorageService.set("images", images);
    });
  }

  @Saga(paint.localstorage)
  public *onPaintLocalStorage(
    payload: Payload<typeof paint["localstorage"]>,
    { localStorageService }: { localStorageService: LocalStorageService }
  ) {
    const images = localStorageService.get("images") || [];

    yield put(image.set(images));
  }

  @Saga(image.purge)
  public *onImagePurge(
    payload: Payload<typeof image["purge"]>,
    { localStorageService }: { localStorageService: LocalStorageService }
  ) {
    const stage: Konva.Stage = yield select(
      (store: Store) => store.canvas.stage
    );

    const [layer] = stage.getLayers();
    const ch = layer.getChildren((child) => child.id() !== "transformer");
    ch.forEach((c) => c.destroy());
    localStorageService.remove("images");
  }

  @Saga(image.set)
  public *onImageSet(
    payload: Payload<typeof image["set"]>,
    { localStorageService }: { localStorageService: LocalStorageService }
  ) {
    const stage: Konva.Stage = yield select(
      (store: Store) => store.canvas.stage
    );

    const [layer] = stage.getLayers();
    payload.forEach((img) => {
      const imageObj = new Image();
      imageObj.src = img.href;

      const konvaImage = new Konva.Image({
        x: img.x,
        y: img.y,
        image: imageObj,
        id: `${img.id}`, // for typescript
        rotation: img.rotation,
        scaleX: img.scaleX,
        scaleY: img.scaleY,
      });
      layer.add(konvaImage);

      konvaImage.on("transformend", () => {
        const position = {
          id: img.id,
          x: konvaImage.x(),
          y: konvaImage.y(),
          rotation: konvaImage.rotation(),
          scaleX: konvaImage.scaleX(),
          scaleY: konvaImage.scaleY(),
        };

        const images = localStorageService.get("images") || [];

        const index = images.findIndex((image) => image.id === img.id);

        if (index >= 0) {
          images[index].x = position.x;
          images[index].y = position.y;
          images[index].rotation = position.rotation;
          images[index].scaleX = position.scaleX;
          images[index].scaleY = position.scaleY;
        }

        localStorageService.set("images", images);
      });
    });
  }

  @Saga(download)
  public *onDownload(payload: Payload<typeof download>) {
    const { stage, name }: Store["canvas"] = yield select(
      (store: Store) => store.canvas
    );

    if (stage) {
      const url = stage.toDataURL();
      downloadURI(url, `${name}.png`);
    }
  }

  @Saga(share)
  public *onShare(
    payload: Payload<typeof share>,
    { localStorageService }: { localStorageService: LocalStorageService }
  ) {
    const images = localStorageService.get("images");

    const token = btoa(JSON.stringify(images));

    const url = `${location.href}?canvas=${token}`;

    navigator.clipboard.writeText(url);
  }

  @Saga(paint.url)
  public *onPaintUrl() {
    const urlSearchParams = new URLSearchParams(location.search);
    const token = urlSearchParams.get("canvas");

    if (token) {
      const images = JSON.parse(atob(token));
      yield put(image.set(images));
    }
  }

  private updateLS(evt: KonvaEventObject<any>) {}
}

export { CanvasSaga };
