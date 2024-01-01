const incrementByAmount = createAction("counter/incrementByAmount");

const initialState = { value: 0 };

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.value++;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload;
    });
});
