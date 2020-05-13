import React, { Component } from "react";

class Rating extends Component {
  table = this.props.rate.split("");
  render() {
    return (
      <div>
        {this.table.map((el) => (
          <img
            className={"star"}
            src={
              "https://i.pinimg.com/originals/98/4d/22/984d22fce5cae2c01473f4abe8063fd1.png"
            }
            alt=""
          />
        ))}
      </div>
    );
  }
}

export default Rating;
