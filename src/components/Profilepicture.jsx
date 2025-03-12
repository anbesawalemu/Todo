import React from 'react';

function Profilepicture() {
    const img ='./images/imag.jpg';
    const handl=(e)=>{
        e.target.style.display="none";
    }
  return (
    <div>
      <img onClick={(e)=>handl(e)}   src={img}></img>
    </div>
  );
}

export default Profilepicture;
