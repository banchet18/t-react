import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reduce";

const store = configureStore({ reducer: rootReducer });

export default store;
