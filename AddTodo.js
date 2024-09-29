import React, {useState} from 'react';
function AddTodo({addTodo}) {
    const [text,setText]= useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        addTodo(text);
        console.log(text);
    }
    return(
        <form onSubmit={handleSubmit} >
            <input type="text" value={text}
            onChange={(e)=> setText(e.target.value)}/><br/>
            <button type="submit">Add Todo</button>
            </form>

    )
}
export default AddTodo
