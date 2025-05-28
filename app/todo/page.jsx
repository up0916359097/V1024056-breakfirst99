import prisma from "@/lib/prisma";
<<<<<<< HEAD
import {addTodo, deleteTodo, toggleTodo } from"@/app/actions/todo";
import addTodo from "@/app/actions/addTodo";
import deleteTodo from "@/app/actions/deleteTodo";
import toggleTodo from "@/app/actions/toggleTodo";
=======
import { addTodo, deleteTodo, toggleTodo } from "@/app/actions/todo";

>>>>>>> ce541ea (123)


export default async function TodoPage() {
    const todos = await prisma.todo.findMany({
        orderBy: [{ id: "asc" }],
    });
<<<<<<< HEAD
=======

>>>>>>> ce541ea (123)
    return (
        <main className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center my-6">Todo List</h1>
            <form action={addTodo} className="mb-4">
                <input 
                 type="text" 
                 name="title" 
                 placeholder="Add a new todo" 
                 className="shadow appearance-none border rounded py-2 px-3 mr-2 text-black"
                 />
                <button 
                 type="submit" 
                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
                        <span className={`${todo.done ? "line-through" : ""} text-lg`}>{todo.title}</span>
                        <div>
                            <div className="flex flex-wrap gap-2">                            
                                <form action={toggleTodo}>
                                    <input type="hidden" name="id" id={todo.id} value={todo.id} />
<<<<<<< HEAD
                                    <input type="hidden" name="isDone" value={todo.done} />
=======
                                    <input type="hidden" name="done" value={todo.done} />
>>>>>>> ce541ea (123)
                                    <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
<<<<<<< HEAD
                                        {todo.done ? "Undo" : "Done"}
=======
                                        {todo.isDone ? "Undo" : "Done"}
>>>>>>> ce541ea (123)
                                    </button>
                                </form>
                                <form action={deleteTodo}>
                                    <input type="hidden" name="id" id={todo.id} value={todo.id} />
                                    <button
                                    type="submit"
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
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
