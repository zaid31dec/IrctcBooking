import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [trains, setTrains] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTrains();
  }, []);

  const fetchTrains = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/trains");
      setTrains(res.data);
    } catch (error) {
      console.error("Error fetching trains", error);
    }
  };

  const handleBook = (trainId) => {
    navigate(`/book/${trainId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-2xl font-semibold text-center mb-4">Available Trains</h2>
        <ul className="space-y-4">
          {trains.map((train) => (
            <li key={train.id} className="border p-4 rounded-md shadow-md bg-gray-50">
              <h3 className="text-lg font-semibold">{train.name}</h3>
              <p>Route: {train.source} → {train.destination}</p>
              <p>Seats Available: <strong>{train.availableSeats}</strong></p>
              <button 
                onClick={() => handleBook(train.id)} 
                className="mt-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                disabled={train.availableSeats === 0}
              >
                {train.availableSeats > 0 ? "Book Now" : "Full"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
