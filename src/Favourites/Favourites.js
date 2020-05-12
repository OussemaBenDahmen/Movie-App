import React, { Component } from "react";
import MovieCardFavourite from "../Mainpage/MovieCard/MovieCardFavourite";

class Favourites extends Component {
  render() {
    return (
      <div className="Mainpage">
        <MovieCardFavourite
          Movies={this.props.Favourites}
          RemoveFav={this.props.RemoveFav}
        />
      </div>
    );
  }
}

export default Favourites;
