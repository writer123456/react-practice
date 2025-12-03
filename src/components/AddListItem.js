import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { itemListActions } from '../store/itemSlice';
// import './AddList.css';

const AddListItem=()=>{
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    return(
        <div className="input_container">
            <div style={{display:"flex",flexDirection:"row"}}>
                <input type="text" style={{width:"120px",height:"30px"}} value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <button onClick={() => dispatch(itemListActions.addItem(inputValue))}>Go</button>
            </div>
        </div>
    )
}
export default AddListItem;