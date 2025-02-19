const express = require("express");

const authRoutes = require("./authRoutes");
const trainRoutes = require("./trainRoutes");
const bookingRoutes = require("./bookingRoutes");

const router = express.Router();


router.get("/", (req, res) => {
  res.send("Railway Management API is working");
});

router.use("/auth", authRoutes);
router.use("/trains", trainRoutes);
router.use("/bookings", bookingRoutes);

module.exports = router;
