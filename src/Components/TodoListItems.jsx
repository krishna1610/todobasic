import React from "react";

class TodoListItems extends React.Component {
  render() {
    return (
      <div className="list-group">
        {this.props.todoList.map((item, index) => {
          return (
            <a
              href="#"
              key={index}
              className={
                "list-group-item list-group-item-action " +
                (this.props.slelectedItems.indexOf(index) >= 0 ? "active" : "")
              }
              onClick={() => {
                this.props.selectedItemChanged(index);
              }}
            >
              {item}
            </a>
          );
        })}
      </div>
    );
  }
}

export default TodoListItems;
