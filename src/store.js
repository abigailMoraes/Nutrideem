import { legacy_createStore as createStore } from "redux";
import itemReducer from "./itemreducer";

const store = createStore(itemReducer);

export default store;
