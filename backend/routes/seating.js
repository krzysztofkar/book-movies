const router = require("express").Router();
const SeatModel = require("../models/seat.model");

const createDefault30Seats = (movieId, res) => {
  for (var i = 1; i <= 30; i++) {
    SeatModel.create({ movieID: movieId, number: i });
  }
  SeatModel.find({ movieID: movieId }).then(seats => res.json(seats));
};

router.get("/", function(req, res) {
  const movieID = Number(req.baseUrl.split("/")[2]);
  SeatModel.find({ movieID: movieID }).then(seats =>
    seats.length < 30 ? createDefault30Seats(movieID, res) : res.json(seats)
  );
});

router.put("/", async function(req, res) {
  for (let seatNumber of req.body.seats) {
    let seat = await SeatModel.findOneAndUpdate(
      {
        number: seatNumber,
        movieID: req.body.movieID
      },
      { isTaken: true }
    );
  }
  res.redirect("/");
});

module.exports = router;
