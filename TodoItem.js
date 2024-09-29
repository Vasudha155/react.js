import React from "react";
function TodoItem({text,completed, toggleCompleted}){
    return(
        <li style={{
            textDecoration:completed ? 'line-through' : 'none',
        }}>
            <input 
            type="checkbox"
            checked={completed}
            onChange={toggleCompleted}
            />
            <span>{text}</span>
        </li>
    );
}
export default TodoItem;
