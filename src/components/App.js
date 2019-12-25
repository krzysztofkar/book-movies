import React from "react";
import MovieList from "./MovieList";
import moviesAPI from "../api/movies-api";

class App extends React.Component {
  state = { movies: [] };

  componentDidMount = async () => {
    // Fetching movies that are currently being played in particular cinema
    const response = await moviesAPI.get("/v4/movies/", {
      // ID for Cinema City in Arkadia shopping mall, Warsaw
      params: { cinema_id: 64777 }
    });
    this.setState({ movies: response.data.movies });
  };

  render() {
    return (
      <div className="ui container">
        <h1>Currently playing in Cinema City Arkadia, Warsaw</h1>
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}
export default App;
