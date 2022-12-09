import Konva from "konva";

const scalePosition = (
  stage: Konva.Stage,
  deltaY: number
): [number, { x: number; y: number }] => {
  const oldScale = stage.scaleX();
  const pointer = stage.getPointerPosition()!;

  const mousePointTo = {
    x: (pointer.x - stage.x()) / oldScale,
    y: (pointer.y - stage.y()) / oldScale,
  };

  let direction = deltaY > 0 ? 1 : -1;

  const newScale = direction > 0 ? oldScale * 1.01 : oldScale / 1.01;

  const newPos = {
    x: pointer.x - mousePointTo.x * newScale,
    y: pointer.y - mousePointTo.y * newScale,
  };

  return [newScale, newPos];
};

export { scalePosition };
