import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TypeCounter = {
    count: number;
}

const counterInititalState: TypeCounter = {
    count: 0
}

const CounterSlice = createSlice({
    name: "counterSlice",
    initialState: counterInititalState,
    reducers: {
        increament: (state) => {
            state.count +=1;
        },
        decreament: (state) => {
            state.count -=1;
        },
        resetCounter: (state) => {
            state.count = counterInititalState.count;
        },
        increamentByValue: (state, action: PayloadAction<number>) => {
            state.count += action.payload;
        }

    }
});

export const { increament, decreament, resetCounter, increamentByValue} = CounterSlice.actions;

export default CounterSlice;
