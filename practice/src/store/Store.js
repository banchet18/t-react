import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./Reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = configureStore({ reducer: rootReducer });
  let persistor = persistStore(store);
  return { store, persistor };
};
