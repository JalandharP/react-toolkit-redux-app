import { RootState } from "../store";

export const selectCount = (state: RootState) => state.counterSlice.count;