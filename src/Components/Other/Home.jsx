import React, { useState } from "react";
import TaskForm from "../TaskList/TaskForm";
import TaskList from "../TaskList/TaskList";
 

const Home = () => {
  const [filter, setFilter] = useState('all');
  return (
    <div>
       <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-4">
          <h1 className="text-2xl font-bold text-center mb-4">Task Management Application</h1>
          <TaskForm />
          <div className="flex justify-center gap-4 my-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-4 py-2 rounded-lg ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              Completed
            </button>
            <button
              onClick={() => setFilter('uncompleted')}
              className={`px-4 py-2 rounded-lg ${filter === 'uncompleted' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              Uncompleted
            </button>
          </div>
          <TaskList filter={filter}/>
        </div>
      </div>
    </div>
  );
};

export default Home;

