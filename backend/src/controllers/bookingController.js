const pool = require("../config/db");

// Book a seat (Handle concurrency issues)
const bookSeat = async (req, res) => {
  const { trainId } = req.body;
  const userId = req.user.id; // Extract from JWT token

  try {
    await pool.query("BEGIN"); // Start transaction

    // Lock the row to prevent race conditions
    const train = await pool.query("SELECT available_seats FROM trains WHERE id = $1 FOR UPDATE", [trainId]);
    if (train.rows.length === 0 || train.rows[0].available_seats <= 0) {
      await pool.query("ROLLBACK");
      return res.status(400).json({ message: "No seats available" });
    }

    // Book a seat (reduce availability)
    const newSeatNumber = train.rows[0].available_seats;
    await pool.query(
      "INSERT INTO bookings (user_id, train_id, seat_number) VALUES ($1, $2, $3) RETURNING *",
      [userId, trainId, newSeatNumber]
    );

    await pool.query("UPDATE trains SET available_seats = available_seats - 1 WHERE id = $1", [trainId]);

    await pool.query("COMMIT"); // Commit transaction
    res.json({ message: "Seat booked successfully", seatNumber: newSeatNumber });
  } catch (err) {
    await pool.query("ROLLBACK");
    res.status(500).json({ message: "Error booking seat", error: err.message });
  }
};

// Get booking details
const getBookingDetails = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "SELECT b.id, u.name AS user, t.name AS train, b.seat_number, b.created_at FROM bookings b JOIN users u ON b.user_id = u.id JOIN trains t ON b.train_id = t.id WHERE b.id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: "Error fetching booking details", error: err.message });
  }
};

module.exports = { bookSeat, getBookingDetails };