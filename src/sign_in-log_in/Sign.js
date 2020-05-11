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
          <h3>Name</h3>
          <input
            Name="Name"
            type="text"
            placeholder="Enter your name"
            onChange={this.props.GetName}
          />
          <h3>Email</h3>
          <input
            Name="Email"
            type="text"
            placeholder="Example@mail.com"
            onChange={this.props.GetEmail}
          />
          <h3>Password</h3>
          <input Name="password" type="password" placeholder="Enter password" />
          <h3>Confirm Password</h3>
          <input
            Name="password"
            type="password"
            placeholder="Re-enter password"
          />
          <div className="Modal-Btns">
            <span>
              <button className="Submit" onClick={""}>
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
