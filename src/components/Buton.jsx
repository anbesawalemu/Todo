import React from 'react';

function Buton() {
    let count =0;


const handlclick2=(name)=>{
    if(count <4)
    {
        count++;
        console.log((`${name} stop clicking me`));
    }
    else{
        console.log(`${name} stop clik me`);
    }
   
}
  return (
    <div>
      <button onClick={()=>handlclick2("anbesaw")}>click me! hur</button>
    </div>
  );
}

export default Buton;
