import React, { useState } from 'react';
import useTimeDelay from './useTimeDelay';

const SearchText = () => {
    const [text, setText] = useState('');
    const delayedValue = useTimeDelay(text, 500);

    return (
        <div className="search-text-container">
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
            />
            <div>{delayedValue}</div>
        </div>
    );
};

export default SearchText;