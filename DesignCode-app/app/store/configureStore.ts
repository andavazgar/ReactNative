import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import uiReducer from "./ui";
import userReducer from "./user";

const rootReducer = combineReducers({ ui: uiReducer, user: userReducer });
const getStore = () => configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export default getStore;
