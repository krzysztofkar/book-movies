import React from 'react';
import './Seating.css';

class Seat extends React.Component {
    state = { chosen: false };

  toggleChoose = () => {
    const currentState = this.state.chosen;
    this.setState({ chosen: !currentState });
  };

  render() {
    return (
    <div className="Seat"
    onClick={this.toggleChoose}
    style={{
        backgroundColor:this.state.chosen ? "rgb(0, 128, 192)" : "rgb(122, 122, 122)"
    }}
    >
        <div className ="each-seat">{this.props.number}</div>
    </div>
    );
}
}

export default Seat;