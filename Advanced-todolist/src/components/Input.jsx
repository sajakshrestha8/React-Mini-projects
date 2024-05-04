import React, { useSyncExternalStore } from "react";

class Input extends React.Component {
  render() {
    return (
      <>
        <input
          placeholder={this.props.placeholder || "Enter Something"}
          name={this.props.name}
          disabled={this.props.disable}
          required={this.props.isrequired}
          className="input-value"
          value={this.props.value}
          onChange={this.props.output}
        ></input>
      </>
    );
  }
}

export default Input;
