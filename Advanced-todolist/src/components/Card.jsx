import React from "react";
import Button from "./Button.jsx";

class Card extends React.Component {
  render() {
    return (
      <>
        <div className="output-card">
          <input
            type="checkbox"
            isChecked={this.props.checked}
            onClick={() => {
              this.props.togglecheckbox();
            }}
          ></input>
          <label>{this.props.value}</label>
          <Button button="Delete" action={this.props.buttonAction} />
          <Button button="Update" />
        </div>
      </>
    );
  }
}

export default Card;
