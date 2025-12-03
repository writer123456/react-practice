import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { itemListActions } from '../store/itemSlice';
const AllItemList=()=>{
    const items = useSelector((state) => state.itemListState.items);
    const dispatch = useDispatch();
    console.log(items);
    return (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",height:"60%",width:"100%"}}>
            {items.map((item) => (
                <div key={item}>{item} <button onClick={() => dispatch(itemListActions.removeItem(item))}>Remove</button></div>
            ))}
        </div>
    )
}

export default AllItemList;