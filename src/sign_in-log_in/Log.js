import React, { Component } from "react";
import "./sign.css";
export default class Sign extends Component {
  render() {
    return (
      <div className="Signup-modal">
        <form className="Signup-Form">
          <h2 className="Modal-Title">Log-In</h2>
          <hr />
          <input
            type="button"
            value="X"
            className="CloseBtn"
            onClick={this.props.HideLogModal}
          />

          <h4>Email</h4>
          <input
            Name="Email"
            type="text"
            placeholder="Example@mail.com"
            onChange={this.props.GetEmail}
          />
          <h4>Password</h4>
          <input
            Name="password"
            type="password"
            placeholder="Enter password"
            onChange={this.props.GetPassword}
          />

          <div className="Modal-Btns">
            <span>
              <input
                type="button"
                value="Log In"
                className="Submit"
                onClick={this.props.Login}
              />

              <input
                type="button"
                value="Cancel"
                className="Cancel"
                onClick={this.props.HideLogModal}
              />
            </span>
          </div>
        </form>
      </div>
    );
  }
}
