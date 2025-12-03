import React from 'react';
import usePrevious from './usePrevious';
import {useState} from 'react';

const Previous=()=>{
    const [counter, setCounter]=useState(0);
    const prev=usePrevious(counter);
    return(
        <div>
            <label>{counter}</label>
            <label>{prev}</label>
            <button onClick={()=>setCounter(counter+1)}>CLick</button>
        </div>
    );


};
export default Previous;