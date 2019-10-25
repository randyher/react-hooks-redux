import React, { useState } from "react";
import Todo from "./Todo.js";

class App extends React.Component {
  state = {
    todos: [
      { id: 1, content: "Do Stuff" },
      { id: 2, content: "Do More Stuff" },
      { id: 3, content: "This is another task" }
    ],
    redHey: false
  };

  handleClick() {
    this.setState({ redHey: !this.state.redHey });
  }

  //Mapping

  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">List</h1>
        <Todo todos={this.state.todos} />
        <h1
          style={this.state.redHey ? { color: "red" } : null}
          onClick={this.handleClick}
        >
          HEY
        </h1>
      </div>
    );
  }
}

export default App;
