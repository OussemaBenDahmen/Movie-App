import React, { Component } from "react";
import "./sign.css";
export default class Sign extends Component {
  render() {
    return (
      <div className="Signup-modal">
        <form className="Signup-Form">
          <h2 className="Modal-Title">Sign-Up</h2>
          <hr />
          <input
            type="button"
            className="CloseBtn"
            onClick={this.props.HideModal}
            value="X"
          />

          <h4>Name</h4>
          <input
            Name="Name"
            type="text"
            placeholder="Enter your name"
            onChange={this.props.GetName}
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
          <h4>Confirm Password</h4>
          <input
            Name="password"
            type="password"
            placeholder="Re-enter password"
            onChange={this.props.GetPasswordConfirm}
          />
          <div className="Modal-Btns">
            <span>
              <input
                type="button"
                value="SignUp"
                className="Submit"
                onClick={this.props.Signup}
              />

              <input
                type="button"
                className="Cancel"
                value="Cancel"
                onClick={this.props.HideModal}
              />
            </span>
            <p>
              Do you have an <a href={""}>Account</a>?
            </p>
          </div>
        </form>
      </div>
    );
  }
}
