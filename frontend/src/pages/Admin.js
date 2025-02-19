import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Admin() {
  const [train, setTrain] = useState({
    name: "",
    source: "",
    destination: "",
    totalSeats: "",
  });

  const handleChange = (e) => {
    setTrain({ ...train, [e.target.name]: e.target.value });
  };

  const handleAddTrain = async (e) => {
    e.preventDefault();
    try {
      const apiKey = "YOUR_ADMIN_API_KEY";  // Secure this properly
      await axios.post("http://localhost:5000/api/admin/train", train, {
        headers: { "x-api-key": apiKey },
      });
      alert("Train added successfully!");
    } catch (error) {
      console.error("Error adding train", error);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Add Train</h2>
          <form onSubmit={handleAddTrain} className="space-y-3">
            <input name="name" placeholder="Train Name" className="border p-2 w-full" onChange={handleChange} />
            <input name="source" placeholder="Source" className="border p-2 w-full" onChange={handleChange} />
            <input name="destination" placeholder="Destination" className="border p-2 w-full" onChange={handleChange} />
            <input name="totalSeats" type="number" placeholder="Total Seats" className="border p-2 w-full" onChange={handleChange} />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full">Add Train</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Admin;
