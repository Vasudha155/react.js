import React, { useState } from "react"
import TodoItem from './TodoItem';
import AddTodo from "./AddTodo";

 function TodoList() {
    const [todos,setTodos]=useState([]);
    const addTodo=(text)=>{
        setTodos([...todos,{text,completed:false}]);
    };
    const toggleCompleted=(index)=>{
      setTodos(
        todos.map((todo,i)=>
          i=== index?{...todo,completed:!todo.completed}:todo
      )
    );
    };
  return (
    <div>
      <AddTodo addTodo={addTodo}/>
      <ul>
        {todos.map((todo,index)=>(
    
      <TodoItem
      key={index}
      text={todo.text}
      completed={todo.completed}
      toggleCompleted={()=>toggleCompleted(index)}
      />
      ))}
      </ul>
      </div>

  );
}
export default TodoList;
