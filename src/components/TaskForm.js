import React, { useContext, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";

const TaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");

  const submitTask = e => {
    e.preventDefault();
    addTask(title);
    e.target.firstChild.focus();
    setTitle("");
  };
  return (
    <form onSubmit={submitTask}>
      <input
        type="text"
        placeholder="Nom"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input type="submit" value="Créer une tache" />
    </form>
  );
};

export default TaskForm;