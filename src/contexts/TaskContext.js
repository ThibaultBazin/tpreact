import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export const TaskContext = createContext();

const TaskContextProvider = props => {
  const getTasks = () => {
    const localData = localStorage.getItem("react-tasks");
    return localData ? JSON.parse(localData) : [];
  };

  const [tasks, setTasks] = useState(getTasks);

  const addTask = (title) => {
    setTasks([...tasks, { title, id: uuidv4() }]);
  };
  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("react-tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;