import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Booking() {
  const { trainId } = useParams();
  const [seats, setSeats] = useState(1);
  const [message, setMessage] = useState("");

  const handleBooking = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `http://localhost:5000/api/book`,
        { trainId, seats },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage(res.data.message);
    } catch (error) {
      setMessage("Booking failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Book Train #{trainId}</h2>
          <input
            type="number"
            min="1"
            max="5"
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
            className="border p-2 mb-3 w-full"
          />
          <button 
            onClick={handleBooking} 
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 w-full"
          >
            Confirm Booking
          </button>
          {message && <p className="mt-3 text-center">{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default Booking;
