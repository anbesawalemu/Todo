import React, { useState } from 'react';

function Cars() {
    const [car,setcar]=useState([])
    const [caryear,setcaryear]=useState(new Date().getFullYear());
    const[carmake,setcarmake]=useState("")
    const [carmodel,setcarmodel]=useState("");
     

    const handlcar=()=>{
        const newcar={
            year:caryear,
            make:carmake,
            model:carmodel
        }
        setcar(c=>[...c,newcar])

        setcaryear(new Date().getFullYear());
        setcarmake("");
        setcarmodel("");

    }
    const handlremove=(index)=>{
        setcar( car.filter((_, i)=> i !== index));

    }

    const handlyear=(e)=>{
        setcaryear(e.target.value);
    
    }
    const handlmake=(e)=>{
        setcarmake(e.target.value);
    }
    const handlmodel=(e)=>{
        setcarmodel(e.target.value);
    }
  return (
    <div>
      <h2>list of cars</h2>
      <ul>
        {car.map((car,index)=>(
            <li key={index} onClick={()=>handlremove(index)}>{car.year} {car.make} {car.model}</li>
        ))}
      </ul>
      <input type="number" value={caryear} onChange={handlyear} /><br />
      <input type="text" value={carmake} onChange={handlmake} placeholder='Enter the make car' /><br />
      <input type="text" value={carmodel} onChange={handlmodel} placeholder='Enter the model car' /><br />
      <button onClick={handlcar}>Add car</button>
    </div>
  );
}

export default Cars;
