import React, { useState } from 'react';

function Foods() {
 const[food,setfood]=   useState(["banan","apple","orang"])



 const handladd=()=>{
    const newFood=document.getElementById("foodinput").value;
    document.getElementById("foodinput").value="";
    setfood(food=>[...food,newFood]);
 }
 const handlremove=(index)=>{
    setfood(food.filter((_,i)=> i !== index))

 }
  return (
    <div>
      <h1>list of food </h1>
      <ul>
        {food.map((item,index)=>(
            <li key={index} onClick={()=>handlremove(index)}>{item} </li>
        ))}
      </ul>
      <input type="text" id='foodinput' placeholder='enter the food ' />
      <button onClick={handladd}>Add</button>
     

    </div>
  );
}

export default Foods;
