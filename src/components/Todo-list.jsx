import React, { useState } from 'react';
 import '../styles/inde.css';
function Todolist() {
  const [task, setTask] = useState(["eat the breakfast", "take a shower", "walk the dog"]);
  const [newTask, setNewTask] = useState("");


  const handleInput = (e) => {
    setNewTask(e.target.value);
  };

 
  const addTask = () => {
    if(newTask.trim() !==""){
      setTask(t=>[...t,newTask]);
        setNewTask("");
    }
    
    
  };

  
  const deleteTask = (index) => {
    const updatetask=task.filter((_,i)=>i!==index);
    setTask(updatetask);
  };


  const moveTask = (index) => {
    if(index>0){
        const updatetask=[...task];
        [updatetask[index],updatetask[index-1]]=
        [updatetask[index-1],updatetask[index]];
        setTask(updatetask);
    }
  };

  
  const moveTaskDown = (index) => {
    if(index<task.length-1){
        const updatetask=[...task];
        [updatetask[index],updatetask[index+1]]=
        [updatetask[index+1],updatetask[index]];
        setTask(updatetask);
    }
  };

  return (
    <div className='todolist'>
      <h1>To-do List</h1>
      <div>
        <input
          type="text"
          placeholder='Enter a task...'
          value={newTask}
          onChange={handleInput}
        />
        <button className='addbt' onClick={addTask}>Add</button>
      </div>
      <ol>
        {task.map((taskItem, index) => (
          <li key={index}>
            <span className='text'>{taskItem}</span>
            <button className='deletbt' onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className='movbt' onClick={() => moveTask(index)}>
              ✌️
            </button>
            <button className='movbt' onClick={() => moveTaskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Todolist;
