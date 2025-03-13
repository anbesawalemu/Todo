import React, { useEffect, useRef, useState } from 'react';

function UseRef() {
   const inputref1=useRef(null);
   const inputref2=useRef(null);
   const inputref3=useRef(null);

      useEffect(()=>{
        console.log("clicke me");
      },[])

    const handlclick1=()=>{
       inputref1.current.focus();
       inputref1.current.style.backgroundColor="yellow";
       inputref2.current.style.backgroundColor="";
       inputref3.current.style.backgroundColor="";
    }
    const handlclick2=()=>{
        inputref2.current.focus();
        inputref1.current.style.backgroundColor="";
        inputref2.current.style.backgroundColor="yellow";
        inputref3.current.style.backgroundColor="";
     }
     const handlclick3=()=>{
        inputref3.current.focus();
        inputref1.current.style.backgroundColor="";
        inputref2.current.style.backgroundColor="";
        inputref3.current.style.backgroundColor="yellow";
     }
  return (
    <div>
      <button onClick={handlclick1} className='bn'>click me1!</button>
      <input ref={inputref1} /><br />
      <button onClick={handlclick2} className='bn'>click me2!</button>
      <input ref={inputref2} /><br />
      <button onClick={handlclick3} className='bn'>click me3!</button>
      <input ref={inputref3} />
    </div>
  );
}

export default UseRef;
