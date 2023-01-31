"use client";
import { Content } from "@next/font/google";
import { log } from "console";
import React, { useState } from "react";
export default function Todo() {
    const [todo, setTodo]=useState('');
    const [todos, setTodos]= useState([
        {todoText:"Studying", completed:false},
        {todoText:"Driving", completed:true},
        {todoText:"Outing", completed:false}

    ]);
    const onClickHandler =(text:any)=>{
        console.log("nabeel", text);
        
    
    // console.log(onClickHandler);
    
    const newTodos =todos.map((todo)=>{
        console.log("todo", todo);
        if(todo.todoText == text.todoText){
           todo.completed = !todo.completed;
        }
        return todo;
    });
    console.log(newTodos);
    setTodos(newTodos);
    
};
const addTodo=()=>{
    const newTodo ={todoText: todo , completed:false}
    const newTodos =[...todos, newTodo]
    setTodos(newTodos);
    
}
const deletetTodo =(minetodo:any) =>{
    const newTodos = todos.filter((todo) => {
        if(todo.todoText == minetodo.todoText) return false;
        return true;
        
    });
    setTodos(newTodos);
}
    return (
        <>
      <div>Todo</div>
      <input type="text" placeholder="Enter your todo" value={todo} onChange={(e)=>{setTodo(e.target.value);
      }}/>
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((elm)=>{
                return <li style={{color:elm.completed?'green':'orange', fontStyle: 'oblique',textDecoration:"underline"}} key={elm.todoText}>
                    <input type = "checkbox" checked={elm.completed} onChange={()=>{onClickHandler(elm)}} />
                    {elm.todoText} <button onClick={()=>{deletetTodo(elm)}}
                    style ={{backgroundColor:"pink", content:" ",}}>{" "}Delete</button></li>;
        })
    }
      </ul>
      </>
    );

  }
  