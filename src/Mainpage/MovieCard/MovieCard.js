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
              onClick={() => this.props.AddFav(index)}
            >
              <img
                src="https://www.searchpng.com/wp-content/uploads/2019/02/favorite-icon-715x715.png"
                alt=""
              />
            </button>
            {this.props.isLogged ? (
              <button
                className="favIcon favIcon2"
                onClick={() => this.props.RemoveFilm(index)}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/1200px-Red_X.svg.png"
                  alt=""
                />
              </button>
            ) : null}
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
