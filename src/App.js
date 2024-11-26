import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import "./App.css";

const App = () => {
  // Estado inicial carregado do localStorage ou com valor padrão
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [filter, setFilter] = useState("All");
  const [darkMode, setDarkMode] = useState(false);

  // Salva os todos no localStorage sempre que o estado de todos mudar
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Função para adicionar nova tarefa
  const addTodo = (task, category) => {
    if (!task.trim()) {
      alert("A tarefa não pode ser vazia!");
      return;
    }
    setTodos([
      ...todos,
      { id: Date.now(), task, category, completed: false },
    ]);
  };

  // Função para alternar o status de conclusão de uma tarefa
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Função para excluir uma tarefa
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Filtra as tarefas com base na categoria selecionada
  const filteredTodos =
    filter === "All"
      ? todos
      : todos.filter((todo) => todo.category === filter);

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      <h1>To-Do List</h1>
      <button
        className="dark-mode-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Modo Claro" : "Modo Escuro"}
      </button>
      <AddTodo addTodo={addTodo} />
      <div className="filters">
        <button onClick={() => setFilter("All")}>Todos</button>
        <button onClick={() => setFilter("Work")}>Trabalho</button>
        <button onClick={() => setFilter("Personal")}>Pessoal</button>
        <button onClick={() => setFilter("Study")}>Estudo</button>
      </div>
      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;
