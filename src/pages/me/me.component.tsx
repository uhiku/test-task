import { Canvas, Nav, Toolbar } from "@core/layout";
import React from "react";
import { useMeHook } from "./me.hook";
import { MeProps } from "./me.props";

const Me: React.FC<MeProps> = () => {
  const {} = useMeHook();

  return (
    <div className="h-full">
      <Nav />
      <div className="grid grid-cols-[1fr_4fr] gap-8 h-full">
        <Toolbar />
        <Canvas />
      </div>
    </div>
  );
};

export { Me };
