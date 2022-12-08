type InputProps = {
  type: "text" | "password";
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  classes?: string;
  placeholder?: string;
};

export type { InputProps };
