import { createStore } from "redux";

import reducer from "./menu";

const configureStore = () => createStore(reducer);

export type RootState = ReturnType<typeof reducer>;
export default configureStore;
