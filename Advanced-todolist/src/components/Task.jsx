import React from "react";

class Task extends React.Component {
  render() {
    return (
      <>
        <table>
          <tr>
            <th>{this.props.heading}</th>
            <th>{this.props.heading1}</th>
            <td>{this.props.heading2}</td>
          </tr>
        </table>
      </>
    );
  }
}

export default Task;
