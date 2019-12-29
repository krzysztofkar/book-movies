import React from "react";

class Seat extends React.Component {
  state = { chosen: false };

  toggleChoose = () => {
    const currentState = this.state.chosen;
    this.setState({ chosen: !currentState });
  };

  render() {
    return (
      <div
        onClick={this.toggleChoose}
        style={{
          backgroundColor: this.state.chosen ? "green" : "gray",
          width: "50px",
          height: "50px",
          margin: "2px auto"
        }}
      />
    );
  }
}

const Seating = () => {
  return (
    <div className="ui container">
      <div
        style={{
          width: "50%",
          backgroundColor: "lightgray",
          marginBottom: "10px",
          textAlign: "center"
        }}
      >
        SCREEN
      </div>
      <div
        style={{
          display: "flex",
          width: "50%",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Seat />
        <Seat />
        <Seat />
        <Seat />
        <Seat />
      </div>
      <button
        type="submit"
        className="ui inverted primary button"
        style={{ width: "50%", marginTop: "10px" }}
      >
        Book those seats
      </button>
    </div>
  );
};

export default Seating;
