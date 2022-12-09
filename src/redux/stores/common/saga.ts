import { paint, startup } from "@redux";
import { Saga } from "redux-chill";
import { all, put, spawn } from "redux-saga/effects";

class CommonSaga {
  @Saga(startup)
  public *onStartup() {
    // do something
    yield spawn(this.onMakeEffects);
  }

  public *onMakeEffects() {
    yield all([put(paint.localstorage()), put(paint.url())]);
  }
}

export { CommonSaga };
