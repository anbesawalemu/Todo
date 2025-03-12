import React, { useState } from 'react';

function Input() {
  const [name ,setname]=  useState("")
  const [quantity,setquantity]=useState();
  const [comment,setcomment]=useState("")
    const [payment, setpayment]=useState("")
    const[shipping,setshipping]=useState("Delivery");
  const handlname=(event)=>{
    setname(event.target.value);
  }
  

  const handlquantity=(event)=>{
    setquantity(event.target.value);
  }

  const handlcomment=(event)=>{
    setcomment(event.target.value);
  }
  const handlpayment=(event)=>{
    setpayment(event.target.value);
  }
  const handlshipping=(event)=>{
    setshipping(Event.target.value);
  }
  return (
    <div>
        <label >Name:</label>
      <input type="text" value={name} onChange={handlname} placeholder='enter your name'/>
      <p>Name:{name}</p>
      <label >Numbers:</label>
      <input type="number" value={quantity}  onChange={handlquantity}/>
      <p>Number:{quantity}</p>
      <textarea value={comment}
      onChange={handlcomment} placeholder='Enter delivery instruction'>
        
      </textarea>
      <p>Mycomment:{comment}</p>
      <select value={payment} onChange={handlpayment}>
         <option value="">select an option</option>
         <option value="visa">visa</option>
         <option value="mastercard">mastercard</option>
         <option value="giftcard">giftcard</option>
         
      </select>
      <p>paymeny:{payment}</p>
      <label >
        <input type="radio" value="pick up"  
                            checked={shipping =="pick up"}
                            onchange={handlshipping}/>
        pick up
      </label><br />
      <label >
      <input type="radio" value="Delivery"  
                            checked={shipping =="Delivery"}
                            onchange={handlshipping}/>
        Delivery
      </label>
      <p>shipping : {shipping}</p>
    </div>
  );
}

export default Input;
