import React from 'react';
import '../styles/style.css'

function Food() {
    const food1="orange";
    const food2="banana";
  return (
    <div className='food'>
      <li>Apple</li>
      <li>{food1}</li>
      <li>{food2}</li>
    </div>
  );
}

export default Food;
