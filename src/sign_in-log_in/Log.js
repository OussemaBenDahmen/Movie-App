import React, { Component } from "react";
import "./sign.css";
export default class Sign extends Component {
  render() {
    return (
      <div className="Signup-modal">
        <form className="Signup-Form">
          <h2 className="Modal-Title">SignUp</h2>
          <hr />
          <button className="CloseBtn" onClick={this.props.HideModal}>
            X
          </button>
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
              <button className="Submit" onClick={this.props.Login}>
                Sign Up
              </button>
              <button className="Cancel">Cancel</button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}
