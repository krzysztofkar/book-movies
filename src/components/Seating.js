import React, { Component } from "react";
import { Link } from "react-router-dom";
import Seat from "./Seat";
import axios from "axios";

class Seating extends Component {
  state = {
    seats: [],
    rows: []
  };

  handleSubmit = e => {
    e.preventDefault();
    const chosenSeatsIDsArray = this.state.seats;
    const movieID = this.props.match.params.id;
    axios
      .put(`http://localhost:5000/movies/${movieID}/seating`, {
        seats: chosenSeatsIDsArray,
        movieID: movieID
      })
      .then(res => res.data);
    alert("Tickets booked successfully!");

    return this.state.seats;
  };

  handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  };

  handleSelectSeat = newSeat => {
    if (newSeat.chosen) {
      this.state.seats.push(newSeat.id);
    } else {
      this.setState({
        seats: this.state.seats.filter(seat => seat.id !== newSeat.id)
      });
    }
  };

  render() {
    var rows = [];
    axios
      .get(`http://localhost:5000/movies/${this.props.match.params.id}/seating`)
      .then(res => this.setState({ rows: res.data }));
    for (let seat of this.state.rows) {
      rows.push(
        <Seat
          number={seat.number}
          key={seat.number}
          handleSelectSeat={this.handleSelectSeat}
          isTaken={seat.isTaken}
        ></Seat>
      );
    }
    return (
      <div className="container-seats">
        <Link to={`/`}>
          <button className="ui button back-btn"> Go back to movies </button>
        </Link>
        <div className="seating-wrapper">
          <div className="screen">SCREEN</div>
          <div className="rows">{rows}</div>
        </div>
        <form className="form-wrapper">
          <h2>Fill this and book your seats</h2>
          <div className="info">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="surname"
              placeholder="Your Surname *"
              onChange={this.handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone *"
              onChange={this.handleChange}
            />
          </div>
          <div className="submit-btn">
            <button
              type="button"
              className="ui inverted primary button book-btn"
              onClick={this.handleSubmit}
            >
              Book those seats
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Seating;
