import React from "react";
import shareIcon from "@assets/share.svg";
import { Button } from "@core/components";
import { NavProps } from "./nav.props";

const Nav: React.FC<NavProps> = () => {
  return (
    <div className="w-full h-14 flex bg-secondary-bg-light dark:bg-secondary-bg-dark content-center flex-wrap justify-between p-3">
      <div className="flex gap-2">
        <Button variant="primary">
          <p className="text-lg">Select</p>
        </Button>
        <Button variant="primary">
          <p className="text-lg">Hand</p>
        </Button>
      </div>
      <div className="flex content-center flex-wrap">
        <p className="text-xl">Name</p>
      </div>
      <div>
        <Button variant="secondary">
          <span className="flex flex-wrap gap-1 items-center">
            <p className="text-lg">Share</p>
            <img src={shareIcon} alt="share" className="w-3 h-3" />
          </span>
        </Button>
      </div>
    </div>
  );
};

export { Nav };
