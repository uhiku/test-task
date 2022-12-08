import { reducer } from "redux-chill";
import { startup } from "./actions";
import { state } from "./state";

const common = reducer(state)
  .on(startup.ready, (state, payload) => ({
    ...state,
    isAppReady: payload,
  }))
  .on(startup.other, () => {
    // just a chaining example
  });

export { common };
