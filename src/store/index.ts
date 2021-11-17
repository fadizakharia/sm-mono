import { createStore } from "redux";
import { userReducer } from "./reducers/user";

export const store = createStore(userReducer);
