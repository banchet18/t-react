import rootReducer from "./Reduce";

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
