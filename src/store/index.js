import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';
import itemListReducer from './itemSlice';

const store = configureStore({
    reducer: {
        counterState: counterReducer,
        itemListState: itemListReducer
    }
});

export default store;