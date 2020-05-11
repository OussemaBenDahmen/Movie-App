import React, { Component } from "react";

class Filmpage extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.el.title}</h3>
      </div>
    );
  }
}

export default Filmpage;
