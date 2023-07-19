import { useState } from "react";
import './styles/home.sass';

import {Todo} from "./components/Todo";
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

    return (
        <div className="sidebar">
            <h1>To do list</h1>
            <div className="todo-list">
                {todos.map((todo) => (
                    <Todo todo={todo} />                    
                ))}
            </div>
            <TodoForm />
        </div>
    );
};
