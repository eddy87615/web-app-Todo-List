import { useState } from 'react';
import './App.css';

function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask('');
    }
  };
  const handleResetTask = () => {
    setTasks([]);
    setNewTask('');
  };

  return (
    <>
      <h1>Todoリスト</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTask}
        placeholder="New Todo"
        onChange={handleChange}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <button onClick={handleResetTask}>Reset Task</button>
    </>
  );
}

export default App;
