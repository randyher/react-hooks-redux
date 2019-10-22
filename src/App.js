import React, { useState } from "react";
import Todo from "./Todo.js";

class App extends React.Component {
  state = {
    todos: [{ id: 1, content: "Do Stuff" }, { id: 2, content: "Do More Stuff" }]
  };
  //Mapping

  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">List</h1>
        <Todo todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
