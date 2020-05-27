import React, { Component } from "react";
import "./loadingspinner.css";
import logo from "../logo.png";

class LoadingSpinner extends Component {
  render() {
    return (
      <div className="loading">
        <img className="loadinglogo" src={logo} alt="" />
        <div className="loadingbar">
          <img
            className="loading1"
            src="https://www.shareicon.net/data/512x512/2015/11/12/670873_circle_512x512.png"
            alt=""
          />
          <img
            className="loading2"
            src="https://www.shareicon.net/data/512x512/2015/11/12/670873_circle_512x512.png"
            alt=""
          />
          <img
            className="loading3"
            src="https://www.shareicon.net/data/512x512/2015/11/12/670873_circle_512x512.png"
            alt=""
          />
          <img
            className="loading4"
            src="https://www.shareicon.net/data/512x512/2015/11/12/670873_circle_512x512.png"
            alt=""
          />
          <img
            className="loading5"
            src="https://www.shareicon.net/data/512x512/2015/11/12/670873_circle_512x512.png"
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default LoadingSpinner;
