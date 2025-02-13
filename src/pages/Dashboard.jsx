import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCalendarCheck, FaHistory, FaFileInvoice, FaStar, FaComment, FaSignOutAlt, FaHome, FaPlus, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Dashboard = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [appointments, setAppointments] = useState([
    { id: 1, date: "2025-02-15", time: "10:00 AM - 12:00 PM", service: "Deep Cleaning", status: "Upcoming" },
    { id: 2, date: "2025-01-30", time: "02:00 PM - 04:00 PM", service: "Standard Cleaning", status: "Completed" },
  ]);

  const [preferences, setPreferences] = useState(["Carpet Cleaning", "Fridge Cleaning"]);
  
  const [reviews, setReviews] = useState([
    { id: 1, name: "Ridwan Y.", review: "Amazing service! My house looks spotless.", rating: 5 },
    { id: 2, name: "Mubeen.", review: "Very professional and on time. Highly recommend!", rating: 4.5 },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="bg-gradient-to-b from-blue-900 to-blue-700 text-white w-64 h-screen p-6 shadow-lg absolute">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <ul className="space-y-6 text-lg">
          <li className="flex items-center gap-3 hover:bg-blue-800 p-3 rounded-lg cursor-pointer transition">
            <FaHome /> <Link to="/">Home</Link>
          </li>
          <li className="flex items-center gap-3 hover:bg-blue-800 p-3 rounded-lg cursor-pointer transition">
            <FaCalendarCheck /> <Link to="/doneappointments">Appointments</Link>
          </li>
          <li className="flex items-center gap-3 hover:bg-blue-800 p-3 rounded-lg cursor-pointer transition">
            <FaHistory /> <Link to="/paymenthistory">History</Link>
          </li>
          <li className="flex items-center gap-3 hover:bg-blue-800 p-3 rounded-lg cursor-pointer transition">
            <FaFileInvoice /> <Link to="/invoice">Invoices</Link>
          </li>
          <li className="flex items-center gap-3 hover:bg-blue-800 p-3 rounded-lg cursor-pointer transition">
            <FaComment /> <Link to="/loyaltyprogram">Loyalty Program</Link>
          </li>
        </ul>

        {/* Logout Button */}
        <button 
          onClick={handleLogout} 
          className="absolute bottom-6 left-6 flex items-center gap-2 text-red-400 hover:text-red-300"
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 ml-64">
        {/* Welcome & Profile Card */}
        <motion.div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-6"
          whileHover={{ scale: 1.02 }}>
          <FaUser className="text-blue-600 text-5xl" />
          <div>
            <h2 className="text-xl font-bold">Welcome, Bhigdhaddie</h2>
            <p className="text-gray-500">Bhigdhaddie@gmail.com</p>
            <span className="text-sm bg-green-500 text-white px-3 py-1 rounded-lg">Premium Member</span>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mt-8">
          {[
            { title: "Total Appointments", value: appointments.length, icon: <FaCalendarCheck className="text-blue-500 text-3xl" /> },
            { title: "Completed Services", value: "12", icon: <FaStar className="text-yellow-500 text-3xl" /> },
            { title: "Pending Requests", value: "3", icon: <FaHistory className="text-red-500 text-3xl" /> }
          ].map((stat, index) => (
            <motion.div key={index} className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4"
              whileHover={{ scale: 1.05 }}>
              {stat.icon}
              <div>
                <h3 className="text-lg font-semibold">{stat.title}</h3>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="flex gap-4 mt-6">
          <motion.button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md flex items-center gap-2"
            whileHover={{ scale: 1.1 }} onClick={() => navigate("/appointment")}>
            <FaPlus /> Book Appointment
          </motion.button>
          <motion.button className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg shadow-md flex items-center gap-2"
            whileHover={{ scale: 1.1 }} onClick={() => navigate("/services")}>
            <FaStar /> View Services
          </motion.button>
        </div>

        {/* Appointments & Reviews Section */}
        <div className="grid grid-cols-2 gap-6 mt-8">
          {/* Appointments Section */}
          <motion.div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-blue-600 flex items-center gap-2">
              <FaCalendarCheck /> Your Appointments
            </h2>
            {appointments.length > 0 ? (
              <ul className="mt-4 space-y-3">
                {appointments.map((appt) => (
                  <li key={appt.id} className={`border p-4 rounded-lg shadow-sm ${appt.status === "Upcoming" ? "bg-blue-100" : "bg-green-100"}`}>
                    <strong>{appt.service}</strong> - {appt.date} ({appt.time})  
                    <span className={`ml-2 px-3 py-1 rounded text-sm font-semibold ${appt.status === "Upcoming" ? "bg-blue-500 text-white" : "bg-green-500 text-white"}`}>
                      {appt.status}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 mt-2">No upcoming appointments.</p>
            )}
          </motion.div>

          {/* Recent Reviews Section */}
          <motion.div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-blue-600 flex items-center gap-2">
              <FaStar /> Recent Reviews
            </h2>
            {reviews.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {reviews.map((review) => (
                  <li key={review.id} className="border p-3 rounded-lg bg-gray-100">
                    <strong>{review.name}</strong>: "{review.review}"
                    <span className="text-yellow-500 ml-2">⭐ {review.rating}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 mt-2">No reviews yet.</p>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
