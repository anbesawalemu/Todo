import React, { useState } from 'react';

function Colorpicker() {
  const[color,setcolor]=  useState("#ffffff")
  const handlcolor=(event)=>{
    setcolor(event.target.event);
  }
  return (
    <div className='color'>
      <h1>color picker</h1>
      <div className='clordisplay' style={{backgroundColor: color}}>
        <p>selected color :{color}</p>
        <label > slecte color:</label>
        <input type="color"  value={color} onChange={handlcolor}/>

      </div>
    </div>
  );
}

export default Colorpicker;
