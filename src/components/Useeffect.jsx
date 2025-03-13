import React, { useEffect, useState } from 'react';

function Useeffect() {
    const[count,setcount]=useState(0);
    const[color,setcolor]=useState("green")
    useEffect(()=>{
        document.title=`count: ${count} ${color}`
    },[])

    const addcount=(e)=>{
       setcount(count+2); 
    }
    const subcount=(e)=>{
        setcount(count-2); 
     }
     const changecolor=()=>{
        setcolor(color=>color == "green"?"red":"green")
     }
  return (
    <div>
      <p className='p' style={{color:color}}>count:{count}</p>
      <button onClick={addcount} className='der'>Add</button>
      <button onClick={subcount} className='der'>sunstruct</button> <br /><br />
      <button onClick={changecolor} className='der'>change color</button>

    </div>
  );
}

export default Useeffect;
