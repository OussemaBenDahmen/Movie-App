import React, { Component } from "react";
import "./movieCard.css";
import { Link } from "react-router-dom";

class MovieCard extends Component {
  render() {
    return (
      <div className="MovieList">
        {this.props.Movies.map((el, index) => (
          <div className="MovieCard">
            <button
              className="favIcon"
              onClick={() => this.props.RemoveFav(index)}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/1200px-Red_X.svg.png"
                alt=""
              />
            </button>
            <img className="MoviePoster" src={el.image} alt="" />
            <div className="MovieInfo">
              <h5>{el.title}</h5>
              <p className="rating">{el.rate}</p>
              <Link to={`/${el.title}`}>
                <button className="DetailBtn">View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default MovieCard;
