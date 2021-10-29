import React, {useState} from 'react'
import AddNewTodoForm from './AddNewTodoForm';
import Todos from './Todos';
import Decoration from './Decoration';
import {decoration_data} from '../data/decoration_info';


function TodoApp(){
    const [todos, setTodos] = useState([]);
    const [editForm, setEditForm] = useState(false);

    function handleEditForm (){
        setEditForm(prev=>{
            return !prev;
        })
    }

    function addTodo(todo){
        setTodos(prevTodos=>{
            return [...prevTodos, todo];
        });
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

    function deleteTodo(todo){

        setTodos(prevTodos =>{
            return [...prevTodos].filter((item)=>{
                return item.id !== todo.id;
              })
          });
    }

    function updateTodo (todoId, newValue){
        const newTodo = {id:todoId, value: newValue};
        setTodos(prev => prev.map((todo)=>{
            return todo.id === todoId ? newTodo : todo
        }));
    }

    return(
        <body>
            <header>TODO app</header>
            {decoration_data.map((item, index) =>{
                return (<Decoration key = {index} top={item.top} left={item.left} color={item.color}/>)
            })}
            <main>
            <div className="todo-container">
                {!editForm && <AddNewTodoForm onSubmit = {addTodo}/>} 
                <Todos
                    todos = {todos}
                    onComplete = {completeTodo}
                    onDelete = {deleteTodo}
                    onUpdate = {updateTodo}
                    toggleEditForm = {handleEditForm}
                 />
            </div>
            </main>
        </body>);
}

export default TodoApp;