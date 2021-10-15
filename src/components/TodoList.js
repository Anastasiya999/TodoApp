import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import Decoration from './Decoration';
import {decoration_data} from '../data/decoration_info';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [editForm, setEditForm] = useState(false);

  function addTodo(todo){
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  }


  function deleteTodo(todo){
    const newTodos = [...todos].filter((item)=>{
      return item.id!==todo.id;
    });
    setTodos(newTodos);
  }


  function editTodo(){
    setEditForm(!editForm);
  }


  function completeTodo(todo){
    const newTodos = [...todos].map((item)=>{
      if(todo.id===item.id){
        item.isComplete = !item.isComplete;
      }
      return item;
    });

    setTodos(newTodos);
  }


  function updateTodo(todoId, newValue){
    const newTodo = {id:todoId, value: newValue};
    setTodos(prev => prev.map((todo)=>{
      return todo.id === todoId ? newTodo : todo
    }));
  }

  
  return (
    <body>
      <header>TODO app</header>
      {decoration_data.map((item, index) =>{
        return (<Decoration key = {index} top={item.top} left={item.left} color={item.color}/>)
      })}
      
      <main>
        <div className="todo-container">
        {editForm ? null:
          <TodoForm 
            onSubmit={addTodo}
          />  
        }
          <Todo 
            todos = {todos} 
            deleteTodo={deleteTodo} 
            updateTodo={updateTodo}
            completeTodo={completeTodo}
            editTodo = {editTodo}
          />
        </div>
      </main>
    </body>  
  )
}

