import { download, drag, image, paint, share } from "./actions";
import { Payload, Saga } from "redux-chill";
import { all, put, select } from "redux-saga/effects";
import { Store } from "@redux";
import { LocalStorageService } from "@core/services/local-storage.service";
import { downloadURI, Figure, Position } from "@core/shared";

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
    localStorageService.remove("images");
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
  public *onShare() {
    const images: (Position & Figure)[] = yield select(
      (store: Store) => store.canvas.images
    );

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
}

export { CanvasSaga };
