import React, { useState } from 'react';

function Mycomponent() {
    const[car,setcar]=useState({
        year:2024,
        make:"froud",
        model:"mustang"
    })
    
    const handltext=(e)=>{
        setcar(car=>({...car,year:e.target.value}))
    }
    const handl=(e)=>{
        setcar(car=>({...car,make:e.target.value}))
    }

    const handlmodel=(e)=>{
        setcar(car=>({...car,model:e.target.value}))
    }
  return (
    <div>
      <p>your favoratie car is :{car.year} {car.make} {car.model} </p>
      <input type="number" value={car.year} onChange={handltext} /><br />
      <input type="text" value={car.make} onChange={handl}/><br />
      <input type="text" value={car.model} onChange={handlmodel} />
      
    </div>
  );
}

export default Mycomponent;
