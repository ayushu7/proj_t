import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        red1: (state, action) => {
            state.value += action.payload;
        },
    },
})

export const {red1} = appSlice.actions;

export default appSlice.reducer;