import React from "react";

class TodoListInput extends React.Component {
  render() {
    return (
      <>
        <input
          type="text"
          placeholder="Add todo item"
          value={this.props.todoItem}
          onChange={this.props.handleChange}
        ></input>
        <button onClick={this.props.addItem}>ADD</button>
        <button onClick={this.props.resetAllItems}>RESET</button>
      </>
    );
  }
}

export default TodoListInput;
