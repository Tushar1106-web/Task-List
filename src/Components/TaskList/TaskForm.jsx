import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../Redux-toolkit/Slices/taskSlice';

function TaskForm() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTask(input));
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;