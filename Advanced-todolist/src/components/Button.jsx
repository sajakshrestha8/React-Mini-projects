import React from "react";

class Button extends React.Component {
  render() {
    return (
      <>
        <div className="button-wrapper">
          <button
            className="button"
            type={this.props.type || "submit"}
            value={this.props.value}
            disabled={this.props.disable}
            onClick={this.props.action}
          >
            {this.props.button}
          </button>
        </div>
      </>
    );
  }
}

export default Button;
