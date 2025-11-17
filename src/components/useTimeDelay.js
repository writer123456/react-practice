import React, { use } from 'react'
import {useState,useEffect} from 'react'

const useTimeDelay=(value,delay)=>{
    const [noBouncedVal,setNobouncedVal]=useState(value);
    useEffect(()=>{
        let timer;
        timer=setTimeout(()=>{setNobouncedVal(value)},delay)
        return ()=>clearTimeout(timer);
    },[value,delay])
    return noBouncedVal;
}
export default useTimeDelay;