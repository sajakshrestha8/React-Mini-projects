import React from "react";
import Heading from "./components/Headingn";
import "./assets/css/index.css";
import Input from "./components/Input.jsx";
import Button from "./components/Button.jsx";
import Task from "./components/Task.jsx";
import Card from "./components/Card.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends React.Component {
  notify = () => toast.success(this.state.value + " Added");
  notify1 = () => toast.warning(this.state.task + " Deleted");

  constructor(props) {
    super(props);
    this.state = {
      task: [
        { name: "go to hell", isComplete: false },
        { name: "go to heaven", isComplete: false },
      ],
      value: [""],
    };
  }

  callMe(name) {
    console.log("i am calling" + name);
  }

  toggleCheckbox = (index) => {
    const unmodifiedValue = this.state.task[index];
    console.log("Unmodified Value " + unmodifiedValue);
    const modified = [
      { name: unmodifiedValue.name },
      { isComplete: !unmodifiedValue.isComplete },
    ];

    console.log(modified);
    const updatedList = [
      ...this.state.task.slice(0, index),
      modified,
      ...this.state.task.slice(index + 1),
    ];
    this.setState({
      task: updatedList,
    });
  };

  popup = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  additem = () => {
    this.setState({
      task: [...this.state.task, this.state.value],
    });

    this.notify();
  };

  render() {
    return (
      <>
        <div className="app-container">
          <Heading title={"To-Do List"} />
          <div className="input-button-wrapper">
            <Input
              placeholder=""
              name="To-do"
              disable={false}
              isRequired={true}
              output={this.popup}
            />
            <Button button="Add" type="Submit" action={this.additem} />
            <ToastContainer theme="dark" position="bottom-right" />
          </div>

          <section>
            {this.state.task.map((obj, index) => {
              return (
                <Card
                  value={obj.name}
                  togglecheckbox={() => {
                    this.toggleCheckbox(index);
                  }}
                  buttonAction={(e) => {
                    this.setState({
                      task: this.state.task.filter((i, idx) => index !== idx),
                    });
                    this.notify1();
                  }}
                />
              );
            })}
          </section>
        </div>
      </>
    );
  }
}

export default App;
