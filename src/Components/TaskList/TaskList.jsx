import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, editTask, deleteTask } from '../../Redux-toolkit/Slices/taskSlice';

function TaskList({filter}) {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'uncompleted') return !task.completed;
    return true;
  });
  return (
    <ul className="space-y-2">
      {filteredTasks.map(task => (
        <li
          key={task.id}
          className={`flex items-center gap-2 border p-2 rounded-lg ${task.completed ? 'bg-green-100' : 'bg-gray-100'}`}
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => dispatch(toggleTask(task.id))}
            className="cursor-pointer"
          />
          <input
            type="text"
            value={task.title}
            onChange={(e) => dispatch(editTask({ id: task.id, title: e.target.value }))}
            className="flex-1 border-none bg-transparent focus:outline-none"
          />
          <button
            onClick={() => dispatch(deleteTask(task.id))}
            className="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;