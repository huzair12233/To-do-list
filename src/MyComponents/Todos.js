import React from 'react';
import TodoItem from "../MyComponents/TodoItem";

const Todos = (props) => {
  const myStyle={
    minheight:"70vh",
    margin:"40px auto"
  }
  return (
    <div className='container my-3' style={myStyle}>
      <h3 className='my-3'>Todos List</h3>
      {props.todos.length ===0? "No todos to display":
       props.todos.map((todo)=>{
        return <TodoItem todo = {todo} key={props.sno} onDelete={props.onDelete} />
  
      })}
      
    </div>
  )
} 

export default Todos