import { Figure, Position } from "./canvas";

type LSKeys = "images" | "two";

type TLocalStorage = {
  images: (Position & Figure)[];
};

export type { LSKeys, TLocalStorage };
