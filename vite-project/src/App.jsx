// App.js

import React, { useState } from 'react';
import AddTask from './AddTask';
import ListTask from './ListTask';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'done', 'not done'

  const addTask = (description) => {
    const newTask = { id: Date.now(), description, isDone: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    );
    setTasks(updatedTasks);
  };

  const editTask = (id, newDescription) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, description: newDescription } : task
    );
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'done') return task.isDone;
    if (filter === 'not done') return !task.isDone;
    return true; // all
  });

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <AddTask addTask={addTask} />
      <div>
        <label>
          Filter tasks:
          <select onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="done">Done</option>
            <option value="not done">Not Done</option>
          </select>
        </label>
      </div>
      <ListTask tasks={filteredTasks} toggleTask={toggleTask} editTask={editTask} />
    </div>
  );
};

export default App;
