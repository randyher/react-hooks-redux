import React, { useState } from "react";
import logo from "./logo.svg";
import Todo from "./Todo.js";

function App() {
  const [todos, setTodo] = useState([
    {
      text: "Updated Computer",
      complete: false
    },
    {
      text: "Is chilling",
      complete: true
    }
  ]);

  //Mapping

  // todos.map();

  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
