import React from "react";
import moviesAPI from "../api/movies-api";
import { Link } from "react-router-dom";
import Seating from "./Seating";
import "./Movie.css";

class Movie extends React.Component {
  state = { movie: [] };

  componentDidMount = async () => {
    // Fetching movie by its ID passed via props
    const {
      match: { params }
    } = this.props;
    const response = await moviesAPI.get(`/v4/movies/${params.id}`, {});
    this.setState({ movie: response.data.movie });
  };

  renderSeating() {
    return <Seating />;
  }

  render() {
    return (
      <div className="ui items">
        <Link to={`/`}>
          <button className="ui button"> Go back to movies </button>
        </Link>
        <div className="item">
          <div className="image">
            <img
              alt="movie-poster"
              src={this.state.movie.poster_image_thumbnail}
            />
          </div>
          <div className="content">
            <h4 className="header" style={{ color: "#f4f4f4" }}>
              {this.state.movie.title}
            </h4>
            <div className="meta" style={{ color: "#f4f4f4" }}>
              <span className="cinema">{this.state.movie.runtime} minutes</span>
            </div>
            <hr />
            <div className="description">
              <p className="description-text">{this.state.movie.synopsis}</p>
              <br />
            </div>
            <a
              className="moreLink"
              href={this.state.movie.website}
              target="blank"
            >
              More info
            </a>
          </div>
          <div className="extra">
            <Link to={`/movies/${this.state.movie.id}/seating`}>
              <button
                className="ui right floated primary button"
                onClick={this.renderSeating}
              >
                Book ticket
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Movie;
