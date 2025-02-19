const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { createUserTable } = require("./models/userModel");
const { createTrainTable } = require("./models/trainModel");
const { createBookingTable } = require("./models/bookingModel");
const routes = require("./routes");

const app = express();


app.use(express.json());
app.use(cors());
app.use("/api", routes);


(async () => {
  await createUserTable();
  await createTrainTable();
  await createBookingTable();
})();


const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port 5000`));
