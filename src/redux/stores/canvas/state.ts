import img1 from "@assets/img-1.svg";
import img2 from "@assets/img-2.svg";
import img3 from "@assets/img-3.svg";
import { Figure, Position } from "@core/shared";
import Konva from "konva";

const figures = [
  { id: 1, href: img1, title: "Scoot" },
  { id: 2, href: img2, title: "Cat" },
  { id: 3, href: img3, title: "Lady" },
];

const state = {
  stage: null as Konva.Stage | null,
  allShapes: figures,
  figures,
  images: [] as (Figure & Position)[],
  drag: {
    id: 0,
    x: 0,
    y: 0,
  },
  name: "Canvas",
};

export { state };
