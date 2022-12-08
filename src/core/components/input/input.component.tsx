import React from "react";
import { clsx } from "clsx";
import { InputProps } from "./input.props";

const Input: React.FC<InputProps> = ({
  name,
  value,
  onChange,
  type,
  classes,
  placeholder,
}) => {
  const styles = clsx(
    "bg-primary-btn-light dark:bg-primary-btn-dark w-full outline-0 placeholder-black",
    classes
  );
  return (
    <input
      className={styles}
      name={name}
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export { Input };
