import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice';

const store = configureStore({
    reducer: {
        auth : authSlice,
        // post : add more slice to post
    }
});

export default store;