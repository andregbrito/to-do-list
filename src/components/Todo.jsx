import React from 'react'



export const Todo = ({ todo }) => {
    return (
        <div className="todo">
            <div className="content">
                <p>{todo.text}</p>
                <p className="category">({todo.category})</p>
            </div>
            <div>
                <button classname='complete'>Done</button>
                <button className='remove'>X</button>
            </div>
        </div>
    );
};

