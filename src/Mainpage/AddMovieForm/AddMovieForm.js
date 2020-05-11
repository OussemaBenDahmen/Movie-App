import React, { Component } from "react";

export default class AddMovie extends Component {
  render() {
    return (
      <div className="Signup-modal">
        <form className="Signup-Form">
          <h2 className="Modal-Title">Add a Movie</h2>
          <hr />
          <button className="CloseBtn" onClick={this.props.HideModal}>
            X
          </button>
          <h3>movie name</h3>
          <input
            Name="Name"
            type="text"
            placeholder="Enter the movie name"
            onChange={this.props.GetFilmName}
          />
          <h3>Image Link</h3>
          <input
            Name="Link"
            type="text"
            placeholder="Url"
            onChange={this.props.GetFilmImage}
          />
          <h3>Movie Rate</h3>
          <input
            Name="Rate"
            type="text"
            placeholder="Rate this movie"
            onChange={this.props.GetFilmRate}
          />

          <div className="Modal-Btns">
            <span>
              <button className="AddMovie" onClick={this.props.AddFilm}>
                Add Movie
              </button>
              <button className="Cancel" onClick={this.props.hideFilmModal}>
                Cancel
              </button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}
