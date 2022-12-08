import React from "react";
import { clsx } from "clsx";
import { PaperProps } from "./paper.props";

const Paper: React.FC<PaperProps> = ({ children, classes }) => {
  const styles = clsx(
    "bg-secondary-bg-light dark:bg-secondary-bg-dark",
    classes
  );
  return <div className={styles}>{children}</div>;
};

export { Paper };
