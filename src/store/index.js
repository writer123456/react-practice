import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';

const store = configureStore({
    reducer: {
        counterState: counterReducer
    }
});

export default store;