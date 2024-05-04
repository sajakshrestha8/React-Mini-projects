import React from "react";
import "../Css/timer.css";

class Timer extends React.Component {
  render() {
    return (
      <>
        <h1>Timer</h1>
        <label className="time"> {this.props.hour} </label>
        <label className="time"> {this.props.minute} </label>
        <label className="time"> {this.props.second} </label>
        <br />
      </>
    );
  }
}

export default Timer;
