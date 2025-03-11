// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { toggleTask, editTask, deleteTask } from '../../Redux-toolkit/Slices/taskSlice';

// function TaskList({filter}) {
//   const tasks = useSelector((state) => state.tasks);
//   const dispatch = useDispatch();
//   const filteredTasks = tasks.filter(task => {
//     if (filter === 'completed') return task.completed;
//     if (filter === 'uncompleted') return !task.completed;
//     return true;
//   });
//   return (
//     <ul className="space-y-2">
//       {filteredTasks.map(task => (
//         <li
//           key={task.id}
//           className={`flex items-center gap-2 border p-2 rounded-lg ${task.completed ? 'bg-green-100' : 'bg-gray-100'}`}
//         >
//           <input
//             type="checkbox"
//             checked={task.completed}
//             onChange={() => dispatch(toggleTask(task.id))}
//             className="cursor-pointer"
//           />
//           <input
//             type="text"
//             value={task.title}
//             onChange={(e) => dispatch(editTask({ id: task.id, title: e.target.value }))}
//             className="flex-1 border-none bg-transparent focus:outline-none"
//           />
//           <button
//             onClick={() => dispatch(deleteTask(task.id))}
//             className="text-red-500 hover:text-red-700"
//           >
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default TaskList;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTask, editTask, deleteTask } from "../../Redux-toolkit/Slices/taskSlice";

function TaskList({ filter }) {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editInput, setEditInput] = useState("");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "uncompleted") return !task.completed;
    return true;
  });

  const handleEdit = (task) => {
    setEditId(task.id);
    setEditInput(task.title);
  };

  const handleSave = (id) => {
    dispatch(editTask({ id, title: editInput }));
    setEditId(null);
    setEditInput("");
  };

  return (
    <ul className="space-y-2">
      {filteredTasks.map((task) => (
        <li key={task.id} className={`flex items-center gap-2 border p-2 rounded-lg ${task.completed ? "bg-green-100" : "bg-gray-100"}`}>
          <input type="checkbox" checked={task.completed} onChange={() => dispatch(toggleTask(task.id))} className="cursor-pointer" />

          {editId === task.id ? <input type="text" value={editInput} onChange={(e) => setEditInput(e.target.value)} className="flex-1 border border-gray-300 px-2" /> : <span className="flex-1">{task.title}</span>}

          {editId === task.id ? (
            <button onClick={() => handleSave(task.id)} className="text-blue-500 hover:text-blue-700">
              Save
            </button>
          ) : (
            <button onClick={() => handleEdit(task)} className="text-yellow-500 hover:text-yellow-700">
              Edit
            </button>
          )}

          <button onClick={() => dispatch(deleteTask(task.id))} className="text-red-500 hover:text-red-700">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
