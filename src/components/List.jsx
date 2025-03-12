import React from 'react';

function List() {
    const frut=[{id:1,name:"apple", calories:95},
        { id:2,   name:"coconut" , calories:92},
        {id:3,name:"banana" ,calories:105},
        {id:4,name:"pineapple" , calories:110}];
    const vagetable=[{id:5,name:"crot", calories:150},
                       { id:6,   name:"gomen" , calories:40},
                        {id:7,name:"salata" ,calories:200},
                       {id:8,name:"tikll guamen" , calories:120}];
        frut.sort((a,b)=> a.name.localeCompare(b.name));
        // frut.sort((a,b)=> a.name.localeCompare(b.name)); // this sort is reverse
        // frut.sort((a,b)=>a.calories-b.calories);//numeric
        // frut.sort((a,b)=>b.calories-a.calories); //revers numeric
        const lowCalfrut=frut.filter(frut=> frut.calories <100);
  return (
    <div>
        <h3 className='fru'>fruits</h3>
        <ul>
        {frut.map((lowCalfru,id)=>(
            <li key={lowCalfru.id} className='item'> {lowCalfru.name}: &nbsp;
              <b> {lowCalfru.calories}</b>
               </li>
            

        ))}
        </ul>
        <div>
        <h3 className='fru'>vagetable</h3>
        <ol>
        {vagetable.map((veget,id)=>(
            <li key={veget.id} className='item'> {veget.name}: &nbsp;
              <b> {veget.calories}</b>
               </li>
            

        ))}

      </ol>
      </div>
    </div>
  );
}

export default List;
