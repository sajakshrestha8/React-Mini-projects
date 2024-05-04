import React from "react";
import Button from "./assets/components/Button";
import Timer from "./assets/components/Timer";
import "./assets/Css/app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: {
        value: 0,
        isstopped: true,
      },

      minute: {
        value: 0,
        isstopped: true,
      },

      second: {
        value: 0,
        isstopped: true,
      },
    };
  }

  start = () => {
    this.interval = setInterval(() => {
      this.setState({
        second: {
          ...this.state.second.value,
          value: this.state.second.value + 1,
        },
      });
      if (this.state.second.value === 59) {
        this.setState({
          minute: {
            ...this.state.minute.value,
            value: this.state.minute.value + 1,
          },
          second: { value: 0 },
        });
      } else if (this.state.minute.value === 59) {
        this.setState({
          hour: {
            ...this.state.hour.value,
            value: this.state.hour.value + 1,
          },
          minute: { value: 0 },
        });
      }
    }, 1000);
  };

  stop = () => {
    clearInterval(this.interval);
    // this.setState({
    //   hour: {
    //     value: this.state.hour.value,
    //     isstopped: false,
    //   },
    //   minute: {
    //     value: this.state.minute.value,
    //     isstopped: false,
    //   },
    //   second: {
    //     value: this.state.second.value,
    //     isstopped: false,
    //   },
    // });
    // console.log(this.state.second.isstopped);
  };

  reset = () => {
    this.setState({
      hour: { value: 0 },
      minute: { value: 0 },
      second: { value: 0 },
    });
  };
  render() {
    return (
      <>
        <div className="whole-wrapper">
          <div>
            <Timer
              hour={this.state.hour.value + "hr.  "}
              minute={this.state.minute.value + "min.  "}
              second={this.state.second.value + "sec "}
            />
          </div>
          <div className="btn-wrapper">
            <Button btnname={"Start"} click={this.start} btn={"start"} />
            <Button btnname={"Stop"} click={this.stop} btn={"stop"} />
            <Button btnname={"Reset"} click={this.reset} btn={"reset"} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
