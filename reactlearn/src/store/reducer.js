import { createAction, createReducer } from "@reduxjs/toolkit";

const incrementByAmount = createAction("counter/incrementByAmount"); //Action

const initialState = { value: 0 }; // initial Store

const rootReducer = createReducer(initialState, (builder) => {
  builder.addCase(incrementByAmount, (state, action) => {
    state.value += action.payload;
  });
});

export { incrementByAmount };
export default rootReducer;
