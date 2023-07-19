import {useState} from 'react'


const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category);
    setValue("");
    setCategory("");
  };

  return (
    <div className="todo-form">
      <h2>Create task</h2>
      <form onSubmit={handleSubmit}>
        <input
              type="text"
              placeholder='Title'
              value={value}
              onChange={(e) => setValue(e.target.value)}
        />
        <select  value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select a category</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Studies">Studies</option>
        </select>
        <button className='submit' type='submit'>Create Task</button>
      </form>
  </div>
  
)};

export default TodoForm