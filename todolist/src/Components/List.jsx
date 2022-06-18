import React from 'react'
import {v4 as uuidv4} from uuidv4;

function List({input,setInput,todos,setTodos}) {

  const onInputChange=(event)=>{
    setInput(event.target.value);
  };
  const onSubmit=(event)=>{
    event.preventDefault();
    setTodos([...todos,{id: uuidv4(),title: input,completed:false}]);
    setInput("");
  };
  
  return (
    <div className='List-wrapper'>

      <h2 className='heading'>
      My <span className='sub-heading'>To</span>-Do List
      </h2>

     
      <div className='wholelist-wrapper'>

        <input className='searchbox' placeholder='search tasks here...'/>
          <div className='input-wrapper'>
          <button className='buttonbox'  value={input} required onChange={onInputChange}>➕</button>
          <input className='buttontext'>Add new task</input>
          <button className='addtask' onSubmit={onSubmit}>✔️</button>
        </div>

      </div>
      
      
    </div>
  )
}

export default List
