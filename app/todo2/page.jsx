"use client";

<<<<<<< HEAD
import { useEffect, useState } from "react";


export default  function TodoPage() {
=======
import {useEffect, useState} from "react"; 

export default function TodoPage() {
>>>>>>> ce541ea (123)
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState("");
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        fetch("/api/todo")
<<<<<<< HEAD
        .then((res) => res.json())
        .then((data) => setTodos(data));
    }, []);
    

    const handleAddTodo = async (e) =>{
    e.preventDefault();
    const res =await fetch("/api/todo",{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify({ title }),

    });
    const newTodo =await res.json();
    setTodos((prevTodos) =>[...prevTodos, newTodo]);
    setTitle("");
}
const handleToggleTodo = async (e, id, done) => {
    e.preventDefault();
    
    await fetch(`/api/todo/${id}`,{
        method: "PATCH",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({done :!done}),
    });
    const newTodos = todos.map((todo)=> {
        if(todo.id!==id){
            return todo
        }
        return {...todo,done:!todo.done}
    });
    setTodos(newTodos);
};

const handleDeleteTodo = async (e,id) =>{
    e.preventDefault();
    await fetch(`/api/todo/${id}`,{
        method:"DELETE",
    });
    const newTodos = todos.filter((todo)=> todo.id !==id);
    setTodos(newTodos);

}
=======
            .then((res) => res.json())
            .then((data) => setTodos(data));
    }, []);

    const handleAddTodo = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/todo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title}),
        });
        const newTodo = await res.json();
        setTodos((prevTodos) => [...prevTodos, newTodo]);
        setTitle("");
    };

const handleToggleTodo = async(e, id, isDone) => {
    e.preventDefault();
    const res = await fetch(`/api/todo/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ isDone: !isDone }),
    });
    const newTodos = todos.map((todo) => todo.id !== id ? todo : { ...todo, isDone: !isDone });
    setTodos(newTodos);
};

const handleDeleteTodo = async(e, id) => {
    e.preventDefault();
    await fetch(`/api/todo/${id}`, {
        method: "DELETE",
    });
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
}

>>>>>>> ce541ea (123)
    return (
        <main className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center my-6">Todo List</h1>
            <form className="mb-4">
                <input 
                 type="text" 
                 name="title" 
                 placeholder="Add a new todo" 
                 className="shadow appearance-none border rounded py-2 px-3 mr-2 text-black"
                 onChange={(e) => setTitle(e.target.value)}
                 />
                <button 
                 type="button" 
                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                 onClick={handleAddTodo}
                 >
                    Add Todo
                </button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li 
                     key={todo.id} 
                     className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded shadow"
                    >
<<<<<<< HEAD
                        <span className={`${todo.done ? "line-through" : ""} text-lg`}>{todo.title}</span>
=======
                        <span className={`${todo.isDone ? "line-through" : ""} text-lg`}>{todo.title}</span>
>>>>>>> ce541ea (123)
                        <div>
                            <div className="flex flex-wrap gap-2">                            
                                <form>
                                    <button
                                    type="button"
<<<<<<< HEAD
                                    className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={(e) => handleToggleTodo(e, todo.id,todo.done)}
                                    >
                                        {todo.done ? "Undo" : "Done"}
                                    </button>
                                </form>
                                <form >
=======
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={(e) => handleToggleTodo(e, todo.id, todo.isDone)}
                                    >
                                        {todo.isDone ? "Undo" : "Done"}
                                    </button>
                                </form>
                                <form>
>>>>>>> ce541ea (123)
                                    <button
                                    type="button"
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={(e) => handleDeleteTodo(e, todo.id)}
                                    >
                                        Delete
                                    </button>
                                </form>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
<<<<<<< HEAD
}
=======
}


>>>>>>> ce541ea (123)
