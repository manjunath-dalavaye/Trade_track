import { configureStore } from '@reduxjs/toolkit' 
import { apiSlice } from '../Services/Api';

export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer
    }
    ,
    middleware:(defaulMiddleware)=>defaulMiddleware().concat(apiSlice.middleware)
});

export type Rootstate = ReturnType<typeof store.getState>;
export type dispatch = typeof store.dispatch;