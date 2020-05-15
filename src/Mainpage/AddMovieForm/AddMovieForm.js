import React, { Component } from "react";

export default class AddMovie extends Component {
  render() {
    return (
      <div className="Signup-modal">
        <form className="Signup-Form">
          <h2 className="Modal-Title">Add a Movie</h2>
          <hr />
          <input
            type="button"
            value="X"
            className="CloseBtn"
            onClick={this.props.hideFilmModal}
          />

          <h4>movie name</h4>
          <input
            Name="Name"
            type="text"
            placeholder="Enter the movie name"
            onChange={this.props.GetFilmName}
          />
          <h4>Image Link</h4>
          <input
            Name="Link"
            type="text"
            placeholder="Url"
            onChange={this.props.GetFilmImage}
          />
          <h4>Movie Rate</h4>
          <input
            Name="Rate"
            type="text"
            placeholder="Rate this movie"
            onChange={this.props.GetFilmRate}
          />

          <div className="Modal-Btns">
            <span>
              <input
                type="button"
                value="Add Movie"
                className="AddMovie"
                onClick={this.props.AddFilm}
              />

              <input
                type="button"
                value="Cancel"
                className="Cancel"
                onClick={this.props.hideFilmModal}
              />
            </span>
          </div>
        </form>
      </div>
    );
  }
}
