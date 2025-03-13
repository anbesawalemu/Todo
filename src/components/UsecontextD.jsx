import React,{useContext} from 'react';
import  {Usercontext} from './UsecontextA copy 2';
function UsecontextD() {
  const user=useContext(Usercontext);
  return (
    <div className='box'>
      <h1>componentsD</h1>
      <h2>{`By ${user}`}</h2>
    </div>
  );
}

export default UsecontextD;
