import React, { useState } from 'react';

function Usestate() {
    const[count,setcount]=useState(0);
    
    const increment=()=>{
        setcount(count+1)
    }
    const decrement=()=>{
        setcount(count-5)
    }
    const reset=()=>{
        setcount(0)
    }
  return (
    <div className='bt'>
        
        <h1 className='ht'>{count}</h1>
        <br />
      <button onClick={increment} className='incre'>increment</button>
      <button onClick={decrement} className='incre'>decrement</button>
      <button onClick={reset} className='incre'>Reset</button>
    </div>
  );
}

export default Usestate;
