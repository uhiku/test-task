type ButtonProps = {
  variant: "primary" | "secondary" | "danger";

  onClick?: () => void;
  classes?: string;
};

export type { ButtonProps };
