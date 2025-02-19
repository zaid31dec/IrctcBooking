const pool = require("../config/db");

const addTrain = async (req, res) => {
  const { name, source, destination, total_seats } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO trains (name, source, destination, total_seats, available_seats) VALUES ($1, $2, $3, $4, $4) RETURNING *",
      [name, source, destination, total_seats]
    );

    res.status(201).json({ message: "Train added successfully", train: result.rows[0] });
  } catch (err) {
    res.status(500).json({ message: "Error adding train", error: err.message });
  }
};


const getTrains = async (req, res) => {
  const { source, destination } = req.query;

  try {
    const result = await pool.query(
      "SELECT * FROM trains WHERE source = $1 AND destination = $2",
      [source, destination]
    );

    res.json({ trains: result.rows });
  } catch (err) {
    res.status(500).json({ message: "Error fetching trains", error: err.message });
  }
};


const getSeatAvailability = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("SELECT available_seats FROM trains WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Train not found" });
    }

    res.json({ trainId: id, availableSeats: result.rows[0].available_seats });
  } catch (err) {
    res.status(500).json({ message: "Error fetching seat availability", error: err.message });
  }
};

module.exports = { addTrain, getTrains, getSeatAvailability };