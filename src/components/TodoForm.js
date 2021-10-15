import React, {useState} from 'react'

export default function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
 
  

  function handleSubmit(e){
    e.preventDefault();
    
    props.onSubmit({
      value: input,
      id: Math.random(10000),
    });
    setInput('');
  }

  function handleChange(e){
    setInput(e.target.value);
  }
  
  
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            placeholder={props.edit.value}
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input edit'   
          />
          <button className="edit">
            Update
          </button>
        </>) 
        : (
        <>
          <input type="text" 
            value={input} 
            onChange={handleChange}
          />
          <button>Add</button>
        </>
        )}
      
    </form>
  )
}

