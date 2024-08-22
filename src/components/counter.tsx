
import react from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../store/hooks.redux";
import { decreament, increament, resetCounter } from "../store/slices/counter.slice";

function Counter() {

    const count= useAppSelector(state=> state.counterSlice.count);
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(increament());
    }
    const decreamentHandler = () => {
        dispatch(resetCounter());
    }

    return <>
    <h1>Counter: {count}</h1>
    <div>
        <button onClick={clickHandler} className="m-5">COUNTER</button>
        <button onClick={decreamentHandler}>Reset</button>
        </div>
    </>
}

export default Counter;