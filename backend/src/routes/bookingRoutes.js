const express = require("express");
const { bookSeat, getBookingDetails } = require("../controllers/bookingController");
const verifyToken = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", verifyToken, bookSeat);

router.get("/:id", verifyToken, getBookingDetails);

module.exports = router;