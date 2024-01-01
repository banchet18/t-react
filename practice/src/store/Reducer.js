import { createAction, createReducer } from "@reduxjs/toolkit";

const incrementByAmount = createAction("counter/incrementByAmount");

const initialState = { value: 0 };

const rootReducer = createReducer(initialState, (builder) => {
  builder.addCase(incrementByAmount, (state, action) => {
    state.value += action.payload;
  });
});
