import React from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <span onClick={() => toggleTodo(todo.id)}>
        {todo.task} - <strong>{todo.category}</strong>
      </span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
