import React from "react";

class FormLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div className="m-3">
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          placeholder="type something"
          onChange={this.handleChange}
        ></input>
        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default FormLabel;
