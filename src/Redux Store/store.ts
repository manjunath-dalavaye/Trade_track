import { configureStore } from '@reduxjs/toolkit' 

export const store = configureStore({
    reducer:{}
});

export type Rootstate = ReturnType<typeof store.getState>;
export type dispatch = typeof store.dispatch;