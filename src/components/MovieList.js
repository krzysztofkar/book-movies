import React from "react";
import Movie from "./Movie";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const MovieList = props => {
  const movies = props.movies.map(movie => {
    if (movie.poster_image_thumbnail && movie.title) {
      return (
        <div className="ui card" style={{ width: "200px" }} key={movie.id}>
          <div className="image">
            <img alt="movie-poster" src={movie.poster_image_thumbnail} />
          </div>
          <Link to={`/movies/${movie.id}`}>
            <div className="content">{movie.title}</div>
          </Link>
        </div>
      );
    }
  });
  return (
    <Router>
      <Switch>
        <Route path="/movies/:id" component={Movie} />
        <Route path="/">
          <div className="ui cards">{movies}</div>
        </Route>
      </Switch>
    </Router>
  );
};

export default MovieList;
