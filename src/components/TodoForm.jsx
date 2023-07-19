import React from 'react'

const TodoForm = () => {
  return <div className="todo-form">
    <h2>Create task</h2>
    <form>
        <input type="text" placeholder='Title'/>
        <select>
            <option value="">Select a category</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Studies">Studies</option>
        </select>
        <button className='submit' type='submit'>Create Task</button>
    </form>
  </div>
  
}

export default TodoForm