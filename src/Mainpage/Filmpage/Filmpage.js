import React, { Component } from "react";
import "./filmpage.css";
class Filmpage extends Component {
  render() {
    return (
      <div className="Filmpage">
        <img className="MovieImage" src={this.props.el.image} alt="" />
        <div className="MovieInfos">
          <div className="movieDesc">
            <img src={""} alt="" />
            <p className="Desc">{this.props.el.Description}</p>
          </div>
          <h2 className="title">{this.props.el.title}</h2>
        </div>
      </div>
    );
  }
}

export default Filmpage;
