import React from 'react'
import { useState } from 'react';

const Counter=()=>{
    const [counter, setCounter] = useState(0);
    const [error, setError]=useState('');
    return (
        <div className="App">
          <h1>Hello React {counter}</h1>
          <div style={{flexDirection:"row"}}>
          <button onClick={() => setCounter(counter + 1)}>Increment</button>
          <button onClick={() => counter>0?setCounter(counter - 1):setError('Counter should be greater than 0')}>Decrement</button>
          </div>
          <div className="errorContainer">{error}</div>
        </div>
      );
    
        


       


}

export default Counter;