import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

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

  todos.map();

  return (
    <div className="App">
      <p> Hey</p>
    </div>
  );
}

export default App;
