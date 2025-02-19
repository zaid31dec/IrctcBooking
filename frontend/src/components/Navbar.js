import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">IRCTC Booking</h1>
      <div className="space-x-4">
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/bookings" className="hover:underline">My Bookings</Link>
        <Link to="/admin" className="hover:underline">Admin</Link>
      </div>
    </nav>
  );
}

export default Navbar;
