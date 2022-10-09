import { configureStore } from "@reduxjs/toolkit";
import appReducer from '../redux/reducers';
export const store = configureStore({
    reducer: {
        app: appReducer,
    },
})