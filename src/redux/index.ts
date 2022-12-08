import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { run } from "redux-chill";

import { canvas, common, CanvasSaga } from "./stores";

const runStore = () => {
  const sagaMiddleware = createSagaMiddleware({
    onError: (error) =>
      console.error(`saga error, reason - [${error.message}]`),
  });

  const reducers = combineReducers({
    common,
    canvas,
  });

  const store = configureStore({
    reducer: reducers,
    enhancers: [applyMiddleware(sagaMiddleware)],
    devTools: import.meta.env.DEV, // TODO: add environment management
  });

  const context = {
    localStorageService: null, // local storage service
  };

  run(sagaMiddleware, [new CanvasSaga()], context);

  return store;
};

export { runStore };
