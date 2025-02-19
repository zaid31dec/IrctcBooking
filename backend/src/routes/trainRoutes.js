const express = require("express");
const { addTrain, getTrains, getSeatAvailability } = require("../controllers/trainController");

const router = express.Router();

const verifyAdmin = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (apiKey !== "myadmin") {
    return res.status(403).json({ message: "Unauthorized: Invalid API Key" });
  }
  next();
};

router.post("/", verifyAdmin, addTrain);
router.get("/", getTrains);
router.get("/:id/seats", getSeatAvailability);

module.exports = router;