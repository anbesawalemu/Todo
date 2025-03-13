import React, { useContext } from 'react';
import  {Usercontext} from './UsecontextA copy 2';
import UsecontextD from './UsecontextD';

function UsecontextC() {
  const user=useContext(Usercontext);
  return (
    <div className='box'>
      <h1>componentsC</h1>
      <h2>{`Hello again ${user}`}</h2>
      <UsecontextD></UsecontextD>
    </div>
  );
}

export default UsecontextC;
