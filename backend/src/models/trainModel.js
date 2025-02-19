const pool = require("../config/db");

const createTrainTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS trains (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      source VARCHAR(100) NOT NULL,
      destination VARCHAR(100) NOT NULL,
      total_seats INTEGER NOT NULL,
      available_seats INTEGER NOT NULL CHECK (available_seats >= 0)
    );
  `;
  await pool.query(query);
};

module.exports = { createTrainTable };
