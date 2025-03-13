import React, { createContext, useState } from 'react';
import UsecontextB from './UsecontextB';
 export const  Usercontext  = createContext();
function Usecontext() {
  const [User,setname]=useState("Anbesaw")
  return (
    <div className='box'>
      <h1>componentsA</h1>
      <h2>{`Hello ${User}`}</h2>
      <Usercontext.Provider value={User}>
        <UsecontextB name={User}></UsecontextB>
      </Usercontext.Provider>
      
    </div>
  );
}

export default Usecontext;
