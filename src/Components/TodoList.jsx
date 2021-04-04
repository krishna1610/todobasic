import React from "react";
import TodoListInput from "./TodoListInput";
import TodoListItems from "./TodoListItems";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      todoItem: "",
      slelectedItems: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.resetAllItems = this.resetAllItems.bind(this);
  }

  handleChange(event) {
    this.setState({ todoItem: event.target.value });
  }

  addItem() {
    this.setState({
      todoList: [...this.state.todoList, this.state.todoItem],
      todoItem: "",
    });
  }

  resetAllItems() {
    this.setState({ todoList: [], slelectedItems: [] });
  }

  selectedItemChanged(index) {
    let copySelectedItems = [...this.state.slelectedItems];
    if (copySelectedItems.indexOf(index) >= 0) {
      copySelectedItems.splice(copySelectedItems.indexOf(index), 1);
    } else {
      copySelectedItems.push(index);
    }
    this.setState({ slelectedItems: copySelectedItems });
  }
  render() {
    return (
      <div>
        <TodoListInput
          todoItem={this.state.todoItem}
          handleChange={this.handleChange}
          addItem={this.addItem}
          resetAllItems={this.resetAllItems}
        />
        <TodoListItems
          todoList={this.state.todoList}
          slelectedItems={this.state.slelectedItems}
          selectedItemChanged={this.selectedItemChanged}
        />
      </div>
    );
  }
}

export default TodoList;
