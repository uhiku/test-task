import React from "react";
import { clsx } from "clsx";

import { ButtonProps } from "./button.props";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  classes,
  variant = "primary",
}) => {
  const styles = clsx("duration-100 py-1 px-2", classes, {
    "bg-primary-btn-light hover:bg-primary-btn-light-100 dark:bg-primary-btn-dark dark:hover:bg-primary-btn-dark-100":
      variant === "primary",
    "bg-secondary-btn-light hover:bg-secondary-btn-light-100 dark:bg-secondary-btn-dark dark:hover:bg-secondary-btn-dark-100":
      variant === "secondary",
  });
  return (
    <button className={styles} onClick={onClick && onClick}>
      {children}
    </button>
  );
};

export { Button };
