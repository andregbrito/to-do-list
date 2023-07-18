import { useState } from "react";
import './styles/home.sass';
import { Board } from "./components/Sidebar";
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
        <Board>
            <div className="todo-list">
                {todos.map((todo) => (
                    <div className="todo">
                        <div className="content">
                            <p>{todo.text}</p>
                            <p className="category">({todo.category})</p>
                        </div>
                        <div>
                            <button>Done</button>
                            <button>x</button>
                        </div>
                    </div>
                ))}
            </div>
            </Board>

                )};
s