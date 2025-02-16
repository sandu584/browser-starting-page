import { configureStore } from "@reduxjs/toolkit";
import linkReducer from '../features/allLinks.js'

export const store = configureStore({
    reducer: linkReducer
});