import React from 'react';
import './Seating.css';

const seat = (props) => {
    return (
    <div className="Seat">
        <div className ="each-seat" onClick= {props.onclick}>{props.number}</div>
    </div>
    )
};

export default seat;