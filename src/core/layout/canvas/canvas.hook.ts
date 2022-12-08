import Konva from "konva";
import { useLayoutEffect, useRef } from "react";

const useCanvasHook = () => {
  const stageContainer = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (stageContainer.current) {
      const stage = new Konva.Stage({
        container: stageContainer.current,
        width: stageContainer.current.clientWidth,
        height: 500,
      });
    }
  }, []);

  return { stageContainer };
};

export { useCanvasHook };
