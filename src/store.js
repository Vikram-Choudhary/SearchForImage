import { createStore } from "redux";
import { appReducer } from "./ActionCreater/appReducer";
export default createStore(appReducer);
