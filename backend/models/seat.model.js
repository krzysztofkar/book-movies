var mongoose = require("mongoose");

var seatSchema = new mongoose.Schema({
  movieID: Number,
  number: Number,
  isTaken: { type: Boolean, default: false }
});

const SeatModel = mongoose.model("SeatModel", seatSchema);

module.exports = SeatModel;
