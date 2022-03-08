import React from "react";
import TaskContextProvider from "./contexts/TaskContext";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="App">
      <TaskContextProvider>
        <TaskForm />
        <TaskList />
      </TaskContextProvider>
    </div>
  );
}

export default App;