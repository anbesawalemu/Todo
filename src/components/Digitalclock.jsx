import React, { useEffect, useState } from 'react';

function Digitalclock() {
    const[time,settime]=useState(new Date());


    useEffect(()=>{
        const intervalid=setInterval(()=>{
            settime(new Date());
        },1000)
        return ()=>{
            clearInterval(intervalid);
        }
    })

    const formattime=()=>{
        let hours=time.getHours();
        const minutes=time.getMinutes();
        const seconds=time.getSeconds();
        const meridiem=hours>=12 ? "pm":"Am";

        hours= hours%12 || 12;
        return `${padzero(hours)}:${padzero(minutes)}:${padzero(seconds)} ${meridiem}`;

    }
    const padzero=(number)=>{
        return (number<10 ? "0" : "")+number;
    }
  return (
    <div className='clock'>
      <div className='clok'>
        <span >{formattime()}</span>
      </div>
    </div>
  );
}

export default Digitalclock;
