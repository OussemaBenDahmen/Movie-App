import React, { Component } from "react";
import "./movieCard.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Rating from "../../Rating";

class MovieCard extends Component {
  render() {
    return (
      <Router>
        <div className="MovieList">
          {this.props.Movies.map((el, index) => (
            <div className="MovieCard">
              <button
                className="favIcon"
                onClick={() => this.props.AddFav(index)}
              >
                <img
                  src="https://www.searchpng.com/wp-content/uploads/2019/02/favorite-icon-715x715.png"
                  alt=""
                />
              </button>
              <img className="MoviePoster" src={el.image} alt="" />
              <div className="MovieInfo">
                <h5>{el.title}</h5>
                <Rating el={el} />
                <Link to={`/${el.title}`}>
                  <button className="DetailBtn">View Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Router>
    );
  }
}

export default MovieCard;
