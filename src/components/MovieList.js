import React from "react";
import Movie from "./Movie";
import Seating from "./Seating";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./MovieList.css";

const MovieList = props => {
  const movies = props.movies.map(movie => {
    if (movie.poster_image_thumbnail && movie.title) {
      return (
        <div className="ui card" key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <div className="image">
              <img
                className="movie-poster"
                alt="movie-poster"
                src={movie.poster_image_thumbnail}
              />
            </div>
            <div className="content">{movie.title}</div>
          </Link>
        </div>
      );
    }
  });
  return (
    <Router>
      <Switch>
        <Route path="/movies/:id/seating" component={Seating} />
        <Route path="/movies/:id" component={Movie} />
        <Route path="/">
          <div className="ui cards">{movies}</div>
        </Route>
      </Switch>
    </Router>
  );
};

export default MovieList;
