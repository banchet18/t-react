import rootReducer from "./Reduce";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
