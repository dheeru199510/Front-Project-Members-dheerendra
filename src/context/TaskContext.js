
import React, { createContext, useState, useEffect } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks on component mount
  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch('https://dummyjson.com/todos');
      const data = await res.json();
      console.log(data.todos)
      setTasks(data.todos);
    };

    fetchTasks();
  }, []);

  // Create a new task
  const createTask = async (newTask) => {
    const res = await fetch('https://dummyjson.com/todos/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
  };


  // Delete a task
  const deleteTask = async (id) => {
    await fetch(`https://dummyjson.com/todos/${id}`, {
      method: 'DELETE',
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const editTask = async (updatedTask) => {
    setTasks((prevTasks) => prevTasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    ));
    
     var  updatedData = {...updatedTask};
        delete  updatedData.id
     
    // Sync with API (PUT request to update task)
    try {
      const response = await fetch(`https://dummyjson.com/todos/${updatedTask.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
       
        body: JSON.stringify(updatedData),
      });
      if (!response.ok) {
        throw new Error('Failed to update task on the server');
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <TaskContext.Provider value={{ tasks, createTask, editTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
