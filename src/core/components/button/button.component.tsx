import React from "react";
import { clsx } from "clsx";

import { ButtonProps } from "./button.props";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  classes,
  variant = "primary",
  disabled = false,
}) => {
  const styles = clsx("duration-100 py-1 px-2", classes, {
    "bg-primary-btn-light enabled:hover:bg-primary-btn-light-100 dark:bg-primary-btn-dark dark:enabled:hover:bg-primary-btn-dark-100":
      variant === "primary",
    "bg-secondary-btn-light enabled:hover:bg-secondary-btn-light-100 dark:bg-secondary-btn-dark dark:enabled:hover:bg-secondary-btn-dark-100":
      variant === "secondary",
    "cursor-not-allowed opacity-70": disabled,
  });
  return (
    <button className={styles} onClick={onClick && onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export { Button };
