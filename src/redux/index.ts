import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { run } from "redux-chill";

import { canvas, common, CanvasSaga, CommonSaga } from "./stores";
import { LocalStorageService } from "@core/services/local-storage.service";

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
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["[canvas] set"],
          ignoredPaths: ["canvas.stage"],
        },
      }),
  });

  const context = {
    localStorageService: new LocalStorageService(), // local storage service
  };

  run(sagaMiddleware, [new CanvasSaga(), new CommonSaga()], context);

  return store;
};

export { runStore };

export type Store = {
  common: ReturnType<typeof common>;
  canvas: ReturnType<typeof canvas>;
};

export * from "./stores";
