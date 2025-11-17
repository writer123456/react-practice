import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counterSlice';

const CounterRedux = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counterState.counter);
    
    return (
        <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
            <label>{counter}</label>
            <button onClick={() => dispatch(counterActions.increment(2))}>+</button>
            <button onClick={() => dispatch(counterActions.decrement(2))}>-</button>
        </div>
    );
};

export default CounterRedux;