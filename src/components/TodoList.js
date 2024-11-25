import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div className="todo-list">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};

export default TodoList;
