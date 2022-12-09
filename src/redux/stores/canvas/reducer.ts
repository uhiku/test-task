import { state } from "./state";
import { konvaStage, image, drag, search } from "./actions";
import { reducer } from "redux-chill";

const canvas = reducer(state)
  .on(konvaStage.set, (state, payload) => {
    state.stage = payload;
    return state;
  })
  .on(image.set, (state, payload) => {
    state.images = payload;

    return state;
  })
  .on(image.add, (state, payload) => {
    state.images = [...state.images, payload];

    return state;
  })
  .on(image.purge, (state) => {
    state.images = [];

    return state;
  })
  .on(drag.start, (state, payload) => {
    state.drag.id = payload;

    return state;
  })
  .on(drag.end, (state, payload) => {
    state.drag.x = payload.x;
    state.drag.y = payload.y;

    return state;
  })
  .on(drag, (state) => {
    state.drag.id = 0;
    state.drag.x = 0;
    state.drag.y = 0;
  })
  .on(search, (state, payload) => {
    state.figures = state.allShapes.filter((shape) =>
      shape.title.toLocaleLowerCase().includes(payload.toLocaleLowerCase())
    );

    return state;
  });

export { canvas };
