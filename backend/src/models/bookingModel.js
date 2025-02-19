const pool = require("../config/db");

const createBookingTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS bookings (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id),
      train_id INTEGER REFERENCES trains(id),
      seat_number INTEGER NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    );
  `;
  await pool.query(query);
};

module.exports = { createBookingTable };
