import {createStore} from "redux";
import {loadState, saveState} from "./utils";

import reducer from "./reducers";

const store = createStore(reducer, loadState());

store.subscribe(() => {
  saveState(store.getState())
})

export default store