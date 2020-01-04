import React from "react";
import MovieList from "./MovieList";
import moviesAPI from "../api/movies-api";
import './App.css';



class App extends React.Component {
  state = { movies: [] };

  componentDidMount = async () => {
    // Fetching movies that are currently being played in particular cinema
    const response = await moviesAPI.get("/v4/movies/", {
      // ID for Multikino Ursynów, Warsaw
      params: { cinema_id: 64996 }
    });
    this.setState({ movies: response.data.movies });
  };

  render() {
    return (
      <div>
      <div className="main-header">
        <h1>Multikino Ursynów</h1>
        </div>
      <div className="ui container">
        <MovieList movies={this.state.movies} />
        </div>
        <footer>
          <div className="contact-wrapper">
            <div className="contact-header">Contact</div>
            <p>Adress: Nowy świat 55</p>
            <p>City: Warsaw</p>
            <p>Telephone: 000-000-000</p>
          </div>
          <div className="copyright-text">© All rights reserved</div>
        </footer>
      </div>
    );
  }
}
export default App;
