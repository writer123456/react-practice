import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counterState',
    initialState: {
        counter: 0,
        prevCounter:0
    },
    reducers: {
        increment(state,action) {
            state.prevCounter=state.counter;
            state.counter += action.payload;
        },
        decrement(state,action) {
            state.prevCounter=state.counter
            state.counter -= action.payload;
        }
       
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;