import React from "react";

class Headingn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="main-header">
          <h1>{this.props.title}</h1>
        </div>
      </>
    );
  }
}

export default Headingn;
