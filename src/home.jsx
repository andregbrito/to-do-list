import { useState } from "react";
import './styles/home.sass';

import { Todo } from "./components/Todo";
import TodoForm from "./components/TodoForm";




export function Home() {
    const [todos, setTodos] = useState([
    {
        id: 1,
        text: "Study",
        category: "Work",
        isCompleted: false,
    },
    {
    id: 2,
        text: "Wash dishes",
        category: "Homework",
        isCompleted: false,
    },
    ]);

    const addTodo = (text, category) => {
        const newTodos = [...todos, {
            id: Math.floor(Math.random() *1000),
            text,
            category,
            isCompleted: false,
            },
        ];
    

    setTodos(newTodos);
};

    return (
        <div className="sidebar">
            <h1>To do list</h1>
            <div className="todo-list">
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} />                    
                ))}
            </div>
            <TodoForm addTodo={addTodo} />
        </div>
    );
};
