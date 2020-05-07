import {createStore, applyMiddleware} from "redux";
import {loadState, saveState} from "./utils";
import thunk from 'redux-thunk';

import reducer from "./reducers";

const store = createStore(reducer, loadState(), applyMiddleware(thunk));

store.subscribe(() => {
  saveState(store.getState())
})

export default store