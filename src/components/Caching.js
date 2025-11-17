import React from 'react';
import { useMemo, useState } from 'react';
import './Caching.css';

const Caching = () => {
    const [data, setData] = useState('');
    
    
    const memoizedData = useMemo(() => {
        console.log('memoizedData is called');
        return data}, [data]);
    return (
        <div className='first-div-container'>
            <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
            <div className='second-div-container'>
                <button onClick={() => setData(data)}>Set Data</button>
                <button onClick={() => setData('')}>Clear</button>
            </div>
            
            <p>{memoizedData}</p>
        </div>
    );
};

export default Caching;