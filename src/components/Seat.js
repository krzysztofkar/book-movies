import React from "react";
import "./Seating.css";

class Seat extends React.Component {
  state = { chosen: false, id: null };

  toggleChoose = () => {
    const currentState = this.state.chosen;
    const currentItem = this.props.number;
    this.setState({ chosen: !currentState, id: currentItem }, () => {
      this.props.handleSelectSeat(this.state);
    });
  };

  render() {
    return (
      <div
        className="Seat"
        onClick={this.toggleChoose}
        disabled={this.props.isTaken}
        style={{
          backgroundColor: this.state.chosen
            ? "rgb(0, 128, 192)"
            : "rgb(122, 122, 122)"
        }}
      >
        <div className="each-seat">
          {this.props.number}
          {this.props.isTaken}
        </div>
      </div>
    );
  }
}

export default Seat;
