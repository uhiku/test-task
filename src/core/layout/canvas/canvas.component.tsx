import React from "react";
import { Paper } from "@core/components";
import { CanvasProps } from "./canvas.props";
import { useCanvasHook } from "./canvas.hook";

const Canvas: React.FC<CanvasProps> = () => {
  const { stageContainer } = useCanvasHook();

  return (
    <Paper classes="mt-2">
      <div ref={stageContainer} className="h-full" />
    </Paper>
  );
};

export { Canvas };
