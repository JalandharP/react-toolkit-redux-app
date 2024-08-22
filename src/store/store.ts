import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/counter.slice";

export const store = configureStore({
    reducer: {
        counterSlice: CounterSlice.reducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
