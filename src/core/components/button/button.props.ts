type ButtonProps = {
  variant: "primary" | "secondary" | "danger";

  onClick?: () => void;
  classes?: string;
  disabled?: boolean;
};

export type { ButtonProps };
