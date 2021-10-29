import React, {useState, useRef} from 'react'
import Button from '../ui/Button';

function AddNewTodoForm(props){
    const inputRef = useRef();
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    function handleSubmit (event){
        event.preventDefault();

        const enteredValue = inputRef.current.value;
        props.onSubmit({
            id:Math.random(10000),
            value:enteredValue
        });

        setInput('');
    }

    function handleChange (e){
        setInput(e.target.value);
    }

   
    return(
        <form onSubmit={handleSubmit} className="todo-form">
            {props.edit ?
                <>
                    <input
                        value={input}
                        onChange={handleChange}
                        name='text'
                        className='todo-input edit'
                        ref={inputRef}
                    />
                    <Button type = "edit">Update</Button>
                </>
            :
                <>
                    <input
                        type="text" 
                        value={input} 
                        ref={inputRef}
                        onChange={handleChange}
                    />
                    <Button>Add</Button>
                </>
            }
            
        </form>
    )
}

export default AddNewTodoForm;