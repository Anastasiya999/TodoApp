import React from 'react'
import { MdDelete, MdEdit} from "react-icons/md";

export default function Todo(props){

    return (<li key={props.index} className={props.isComplete ? 'todo-row complete' : 'todo-row'}>
                <p key={props.id} onClick={props.onComplete}>{props.value}</p>
                <div className='icons'>
                    <MdEdit size = {30} onClick={props.onEdit}/>
                    <MdDelete size = {30} onClick={props.onDelete} />
                </div>
            </li>)
}