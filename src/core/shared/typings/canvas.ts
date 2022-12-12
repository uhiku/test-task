type Figure = {
  id: number;
  href: string;
  title: string;
};

type Position = {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
};

export type { Figure, Position };
