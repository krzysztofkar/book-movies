import React from "react";

const MovieList = props => {
  const movies = props.movies.map(movie => {
    if (movie.poster_image_thumbnail && movie.title) {
      return (
        <div className="ui card" style={{ width: "200px" }}>
          <div className="image">
            <img alt="movie-poster" src={movie.poster_image_thumbnail} />
          </div>
          <div className="content">{movie.title}</div>
          <button className="ui button">Book tickets!</button>
        </div>
      );
    }
  });
  return <div className="ui cards">{movies}</div>;
};

export default MovieList;
