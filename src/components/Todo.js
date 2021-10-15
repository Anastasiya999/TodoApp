import React, {useState} from 'react'
import TodoForm from './TodoForm';
import { MdDelete, MdEdit} from "react-icons/md";

export default function Todo(props) {
  const [edit, setEdit] = useState({
    id: null,
    value:''
  });

  function submitUpdate(todo){
    props.updateTodo(edit.id, todo.value);
    setEdit({
      id: null,
      value:''
    });
    props.editTodo();
  }

  function handleEdit(todo){
    props.editTodo();
    setEdit(todo);
  }

  if(edit.id){
    return <TodoForm edit={edit} onSubmit={submitUpdate}/>
  }
 
  return (
    <div>
      {props.todos.map((todo, index)=>{
        return (
        <div key={index} className={todo.isComplete ? 'todo-row complete' : 'todo-row'}  >
          <p key={todo.id} onClick={()=>props.completeTodo(todo)}>{todo.value}</p>
          <div>
              <MdEdit onClick={()=>handleEdit(todo)}/>
              <MdDelete onClick={()=>props.deleteTodo(todo)} />
          </div>
        </div>)   
      })}
    </div>
  )
}

