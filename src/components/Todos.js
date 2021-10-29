import React, {useState} from 'react'
import AddNewTodoForm from './AddNewTodoForm';
import Todo from './Todo';

export default function Todos(props){
    const [edit, setedit] = useState(null);

    function handleEdit(item){
        setedit({
            id: item.id,
            value: item.value
        });
        props.toggleEditForm();
    }

    function handleUpdate (item){
        props.onUpdate(edit.id, item.value);
        setedit(null);
        props.toggleEditForm();
    }

    if (edit){
        return <AddNewTodoForm 
                    edit = {edit}
                    onSubmit = {handleUpdate}
                />
    }
    return(<ul>
               {props.todos.map((item, index)=>{
                   return(
                       <Todo
                            key = {index}
                            isComplete = {item.isComplete}
                            id = {item.id}
                            value = {item.value}
                            onComplete = {()=>props.onComplete(item)}
                            onDelete = {()=>props.onDelete(item)}
                            onEdit = {()=>handleEdit(item)}     
                       />
                   )
               })}
          </ul>);
}