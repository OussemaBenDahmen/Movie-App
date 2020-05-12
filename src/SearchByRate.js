import React, { Component } from "react";

class SearchByRate extends Component {
  state = {
    rates: [1, 2, 3, 4, 5],
  };
  render() {
    return (
      <div>
        {this.state.rates.map((el, index) => (
          <button
            className="searchBtn"
            onClick={() => this.props.SearchRate(el)}
          >
            <img
              src="https://i.pinimg.com/originals/98/4d/22/984d22fce5cae2c01473f4abe8063fd1.png"
              alt=""
              width="13px"
            />
          </button>
        ))}
      </div>
    );
  }
}

export default SearchByRate;
