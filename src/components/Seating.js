import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Seat from './Seat';

class Seating extends Component {
  state = { chosen: false };

  toggleChoose = () => {
    const currentState = this.state.chosen;
    this.setState({ chosen: !currentState });
  };

  render() {
    var rows = [];
    for (var i = 1; i <= 30; i++) {
    rows.push(<Seat
    onclick={this.toggleChoose}
    style={{backgroundColor: this.state.chosen ? "rgb(0, 128, 192)" : "rgb(122, 122, 122)"}}
    number={i}
    ></Seat>);
  }

    return (
    <div className="container-seats">
    <Link to={`/`}>
          <button className="ui button"> Go back to movies </button>
        </Link>
        <div className="seating-wrapper">
      <div className="screen">
        SCREEN
      </div>
      <div className="rows">{rows}</div>
      </div>
      <form className="form-wrapper">
        <h2>Fill this and book your seats</h2>
        <div className="info">
        <input type="text" name="field1" placeholder="Your Name *"/>
        <input type="text" name="field1" placeholder="Your Surname *"/>
        <input type="email" name="field2" placeholder="Your Email *"/>
        <input type="text" name="field1" placeholder="Your Phone *"/>
        </div>
      </form>
      <div className="submit-btn">
      <button
        type="submit"
        className="ui inverted primary button book-btn"
      >
        Book those seats
      </button>
      </div>
    </div>
   
    );
  }
}


export default Seating;
