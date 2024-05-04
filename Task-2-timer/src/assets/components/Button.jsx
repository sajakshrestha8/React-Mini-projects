import React from "react";
import "../Css/button.css";

class Button extends React.Component {
  render() {
    return (
      <>
        <button className={this.props.btn} onClick={this.props.click}>
          {this.props.btnname}
        </button>
      </>
    );
  }
}

export default Button;
