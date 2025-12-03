import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counterSlice';

const CounterRedux = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counterState.counter);
    const prevCounter = useSelector(state => state.counterState.prevCounter);
    
    
    return (
        <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
            <label>{counter}</label>
            <label>{prevCounter}</label>
            <button onClick={() => dispatch(counterActions.increment(2))}>+</button>
            <button onClick={() => dispatch(counterActions.decrement(2))}>-</button>
        </div>
    );
};

export default CounterRedux;