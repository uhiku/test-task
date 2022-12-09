import { scalePosition } from "@core/shared";
import { drag, konvaStage, Store } from "@redux";
import Konva from "konva";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useCanvasHook = () => {
  const dispatch = useDispatch();
  const { images } = useSelector((store: Store) => store.canvas);
  const stageContainer = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState<Konva.Stage>();
  const [layer, setLayer] = useState<Konva.Layer>();

  useLayoutEffect(() => {
    if (stageContainer.current) {
      const stage = new Konva.Stage({
        container: stageContainer.current,
        width: stageContainer.current.clientWidth,
        height: 500,
        draggable: true,
      });

      stage.on("wheel", (e) => {
        e.evt.preventDefault();

        const [scale, position] = scalePosition(stage, e.evt.deltaY);

        stage.scale({ x: scale, y: scale });
        stage.position(position);
      });

      const layer = new Konva.Layer();
      stage.add(layer);

      setStage(stage);
      setLayer(layer);
      dispatch(konvaStage.set(stage));
    }
  }, []);

  useEffect(() => {
    if (layer) {
      images.forEach((imagePos) => {
        const imageObj = new Image();
        imageObj.src = imagePos.href;

        const konvaImage = new Konva.Image({
          x: imagePos.x,
          y: imagePos.y,
          image: imageObj,
          id: `${imagePos.id}`, // for typescript
        });
        layer.add(konvaImage);
      });

      /**
       * Clear canvas on clear event
       */
      if (images.length === 0) {
        layer.removeChildren();
      }
    }
  }, [images]);

  const handleOnDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (stage) {
      stage.setPointersPositions(e);

      const coordinates = stage.getRelativePointerPosition();

      if (coordinates) {
        dispatch(drag.end(coordinates));
      }
      stage.setPointersPositions(null);
    }
  };

  return { stageContainer, stage, handleOnDrop };
};

export { useCanvasHook };
