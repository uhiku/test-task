import { Figure, Position } from "@core/shared";
import Konva from "konva";
import { make } from "redux-chill";

const konvaStage = make("[canvas]").stage(
  "set",
  (payload: Konva.Stage) => payload
);

const image = make("[canvas] image")
  .stage("add", (payload: Figure & Position) => payload)
  .stage("set", (payload: (Figure & Position)[]) => payload)
  .stage("remove", (payload: number) => payload)
  .stage("purge");

const drag = make("[canvas] drag")
  .stage("start", (payload: number) => payload)
  .stage("end", (payload: { x: number; y: number }) => payload);

const paint = make("[canvas] paint").stage("localstorage").stage("url");

const search = make("[canvas] search").stage((payload: string) => payload);

const download = make("[canvas] download");

export { konvaStage, image, drag, paint, search, download };
