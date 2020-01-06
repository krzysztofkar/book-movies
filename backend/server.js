const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/book-seats", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log("Connected to MongoDb..."))
  .catch(err => console.log("Connection to DB failed...", err));

const seatingRouter = require("./routes/seating");

app.use("/movies/:id/seating", seatingRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
