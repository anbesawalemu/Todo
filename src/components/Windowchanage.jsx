import React, { useEffect, useState } from 'react';

function Windowchanage() {
    const [windth,setwindth]=useState(window.innerWidth);
    const [hieht,sethieht]=useState(window.innerHeight);

 useEffect(()=>{
    window.addEventListener("resize",windowchange);
    console.log("event listener adds");
 },[])

 useEffect(()=>{
    document.title=`${windth} x ${hieht}`
 },[])



    const windowchange=()=>{
        setwindth(window.innerWidth);
        sethieht(window.innerHeight);
    }
  return (
    <div>
      <p>window windth:{windth}</p>
      <p>window hieht:{hieht}</p>
    </div>
  );
}

export default Windowchanage;
