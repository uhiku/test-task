import { make } from "redux-chill";

const startup = make("[common] set app ready")
  .stage("ready", (payload: boolean) => payload)
  .stage("other");

export { startup };
