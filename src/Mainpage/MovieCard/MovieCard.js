import React, { Component } from "react";
import "./movieCard.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Filmpage from "../Filmpage/Filmpage";
class MovieCard extends Component {
  render() {
    return (
      <div className="MovieList">
        {this.props.Movies.map((el) => (
          <div className="MovieCard">
            <button className="favIcon" onClick={(el) => this.props.AddFav(el)}>
              <img
                src="https://www.searchpng.com/wp-content/uploads/2019/02/favorite-icon-715x715.png"
                alt=""
              />
            </button>
            <img className="MoviePoster" src={el.image} alt="" />
            <div className="MovieInfo">
              <h5>{el.title}</h5>
              <p>{el.rate}</p>
              <Link to={`/${el.title}`}>
                <button className="DetailBtn">View Details</button>
              </Link>
            </div>
            <Switch>
              <Route path={`/${el.title}`}>
                <Filmpage el={el} />
              </Route>
            </Switch>
          </div>
        ))}
      </div>
    );
  }
}

export default MovieCard;
