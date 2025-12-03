import { createSlice } from '@reduxjs/toolkit';

const itemSlice = createSlice({
    name: 'itemList',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            // state.items.push(action.payload);
            if(state.items.includes(action.payload)){
                return;
            }
            state.items=[...state.items, action.payload];
            console.log(state.items);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item !== action.payload);
            console.log(state.items);
        },
    },
});

export const itemListActions = itemSlice.actions;
export default itemSlice.reducer;