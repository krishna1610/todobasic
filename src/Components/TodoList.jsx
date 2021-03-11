import React from "react";

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
        <input
          type="text"
          placeholder="Add todo item"
          value={this.state.todoItem}
          onChange={this.handleChange}
        ></input>
        <button onClick={this.addItem}>ADD</button>
        <button onClick={this.resetAllItems}>RESET</button>
        <div className="list-group">
          {this.state.todoList.map((item, index) => {
            return (
              <a
                href="#"
                key={index}
                className={
                  "list-group-item list-group-item-action " +
                  (this.state.slelectedItems.indexOf(index) >= 0
                    ? "active"
                    : "")
                }
                onClick={() => {
                  this.selectedItemChanged(index);
                }}
              >
                {item}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TodoList;
