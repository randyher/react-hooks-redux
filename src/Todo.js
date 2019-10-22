import React, { useState } from "react";

function Todo({ todos }) {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div>
          <span>{todo.content}</span>
        </div>
      );
    })
  ) : (
    <p> You have NO todos left</p>
  );
  return <div className="App">{todoList}</div>;
}

export default Todo;
