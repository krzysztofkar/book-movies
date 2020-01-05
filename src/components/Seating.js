import React, { Component } from "react";
import { Link } from "react-router-dom";
import Seat from "./Seat";

class Seating extends Component {
  state = {
    seats: []
  };

  handleSubmit = () => {
    console.log(this.state);
    return this.state;
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
    for (var i = 1; i <= 30; i++) {
      rows.push(
        <Seat
          number={i}
          key={i}
          handleSelectSeat={this.handleSelectSeat}
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
