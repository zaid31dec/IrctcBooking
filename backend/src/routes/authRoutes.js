const express = require("express");
const { registerUser, loginUser, logoutUser} = require("../controllers/authController");

const verifyToken = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/logout", verifyToken, logoutUser);
module.exports = router;