import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import menuReducer from "./menu";
import userReducer from "./user";

const rootReducer = combineReducers({ menu: menuReducer, user: userReducer });
const getStore = () => configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export default getStore;
