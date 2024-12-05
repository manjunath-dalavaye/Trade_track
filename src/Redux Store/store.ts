import { configureStore } from '@reduxjs/toolkit' 
import { apiSlice } from '../Services/Api';
import {chartApi} from '../Services/ChartApi'

export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        [chartApi.reducerPath]:chartApi.reducer
    }
    ,
    middleware:(defaulMiddleware)=>defaulMiddleware().concat(apiSlice.middleware).concat(chartApi.middleware)
});

export type Rootstate = ReturnType<typeof store.getState>;
export type dispatch = typeof store.dispatch;