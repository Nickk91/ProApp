import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../slices/counterSlice.js";

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);

  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;
