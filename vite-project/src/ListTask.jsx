// ListTask.js

import React from 'react';
import Task from './Task';

const ListTask = ({ tasks, toggleTask, editTask }) => {
  return (
    <div>
      {tasks.map(task => (
        <Task key={task.id} task={task} toggleTask={toggleTask} editTask={editTask} />
      ))}
    </div>
  );
};

export default ListTask;
