import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("Work");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task, category);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicionar uma tarefa..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Work">Trabalho</option>
        <option value="Personal">Pessoal</option>
        <option value="Study">Estudo</option>
      </select>
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default AddTodo;

