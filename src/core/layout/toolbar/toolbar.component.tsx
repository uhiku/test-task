import React from "react";
import { useToolbarHook } from "./toolbar.hook";
import { ToolbarProps } from "./toolbar.props";
import checkIcon from "@assets/check-circle.svg";
import plusIcon from "@assets/plus.svg";
import { Button, Input, Paper } from "@core/components";
import clsx from "clsx";

const Toolbar: React.FC<ToolbarProps> = () => {
  const {
    handleSearch,
    searchTitle,
    figures,
    handleDragStart,
    images,
    handleClearClick,
    handleDownloadClick,
  } = useToolbarHook();

  return (
    <Paper classes="mt-2 p-2 flex flex-col gap-4">
      <div className="">
        <Input
          type="text"
          name="search"
          value={searchTitle}
          onChange={handleSearch}
          placeholder="Search..."
        />
      </div>
      <div className="flex gap-1">
        <Button variant="primary" onClick={handleClearClick}>
          <p className="text-sm">Clear</p>
        </Button>
        <Button
          variant="primary"
          disabled={!images.length}
          onClick={handleDownloadClick}
        >
          <p className="text-sm">Download</p>
        </Button>
      </div>
      <div>
        <p className="text-sm">Files</p>
        {figures.map((figure) => {
          const existsOnCanvas = images.some((image) => image.id === figure.id);

          return (
            <div
              key={figure.id}
              className="flex p-2 flex-wrap items-center hover:bg-primary-btn-light-100 dark:hover:bg-primary-btn-dark-100 justify-between"
            >
              <img
                className={clsx("w-10", {
                  "cursor-not-allowed": existsOnCanvas,
                  "cursor-move": !existsOnCanvas,
                })}
                src={figure.href}
                alt={figure.title}
                draggable={!existsOnCanvas}
                onDragStart={() => {
                  handleDragStart(figure.id);
                }}
              />
              <p className="text-base">{figure.title}</p>
              <img
                src={existsOnCanvas ? checkIcon : plusIcon}
                alt="check"
                className="w-5 h-5"
              />
            </div>
          );
        })}
      </div>
    </Paper>
  );
};

export { Toolbar };
