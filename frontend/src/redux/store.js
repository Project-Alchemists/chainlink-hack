import { createStore } from "redux";
import contractReducer from "./reducer";

export const store = createStore(contractReducer);
