import { createStore } from "redux";

import { reducer } from "./reducer.js";

export const system = createStore(reducer);

console.log(system.getState());
system.subscribe(() => {
  console.log(system.getState());
});
