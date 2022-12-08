import React from "react";
import { useToolbarHook } from "./toolbar.hook";
import { ToolbarProps } from "./toolbar.props";
import checkIcon from "@assets/check-circle.svg";
import { Input, Paper } from "@core/components";

const Toolbar: React.FC<ToolbarProps> = () => {
  const { figures } = useToolbarHook();

  return (
    <Paper classes="mt-2 p-2 flex flex-col gap-4">
      <div className="">
        <Input
          name="search"
          value=""
          onChange={(e) => {}}
          type="text"
          placeholder="Search..."
        />
      </div>
      <div>
        <p className="text-sm">Files</p>
        {figures.map((figure) => (
          <div
            key={figure.id}
            className="flex p-2 flex-wrap items-center hover:bg-primary-btn-light-100 dark:hover:bg-primary-btn-dark-100 justify-between"
          >
            <img
              className="w-10 cursor-move"
              src={figure.href}
              alt={figure.title}
            />
            <p className="text-base">{figure.title}</p>
            <img src={checkIcon} alt="check" className="w-5 h-5" />
          </div>
        ))}
      </div>
    </Paper>
  );
};

export { Toolbar };
