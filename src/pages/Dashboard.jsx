import React, { useState } from "react";
import { FaCalendarCheck, FaHistory, FaFileInvoice, FaStar, FaComment, FaSignOutAlt } from "react-icons/fa";
import LoyaltyProgram from "../components/LoyaltyProgram";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, date: "2025-02-15", time: "10:00 AM - 12:00 PM", service: "Deep Cleaning", status: "Upcoming" },
    { id: 2, date: "2025-01-30", time: "02:00 PM - 04:00 PM", service: "Standard Cleaning", status: "Completed" },
  ]);

  const [preferences, setPreferences] = useState(["Carpet Cleaning", "Fridge Cleaning"]);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="bg-gradient-to-b from-blue-900 to-blue-700 text-white w-64 h-screen p-6 shadow-lg absolute">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <ul className="space-y-6 text-lg">
          <li className="flex items-center gap-3 hover:bg-blue-800 p-3 rounded-lg cursor-pointer transition">
            <FaCalendarCheck /> Appointments
          </li>
          <li className="flex items-center gap-3 hover:bg-blue-800 p-3 rounded-lg cursor-pointer transition">
            <FaHistory /> History
          </li>
          <li className="flex items-center gap-3 hover:bg-blue-800 p-3 rounded-lg cursor-pointer transition">
            <FaFileInvoice /> Invoices
          </li>
          <li className="flex items-center gap-3 hover:bg-blue-800 p-3 rounded-lg cursor-pointer transition">
            <FaStar /> Preferences
          </li>
          <li className="flex items-center gap-3 hover:bg-blue-800 p-3 rounded-lg cursor-pointer transition">
            <FaComment />  Contact Cleaner
          </li>
        </ul>
        <button className="absolute bottom-6 left-6 flex items-center gap-2 text-red-400 hover:text-red-300">
          <FaSignOutAlt /> Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 ml-64">
        <h1 className="text-4xl font-bold text-blue-700 text-center">Customer Dashboard</h1>
        <p className="text-center text-gray-600 mt-2">Manage your cleaning appointments & preferences</p>

        {/* Grid Layout for Sections */}
        <div className="grid grid-cols-2 gap-6 mt-8">
          {/* Appointments Section */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
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
          </div>

          {/* Preferences Section */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-blue-600 flex items-center gap-2">
              <FaStar /> Your Preferences
            </h2>
            {preferences.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {preferences.map((pref, index) => (
                  <li key={index} className="border p-3 rounded-lg bg-yellow-100">{pref}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 mt-2">No saved preferences yet.</p>
            )}
          </div>

          {/* Invoices Section */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-blue-600 flex items-center gap-2">
              <FaFileInvoice /> Your Invoices
            </h2>
            <p className="text-gray-500 mt-2">Download past invoices & receipts.</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Download Invoice
            </button>
          </div>

          {/* Customer Chat */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-blue-600 flex items-center gap-2">
              <FaComment /> Contact Cleaner
            </h2>
            <textarea className="w-full mt-2 border p-3 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Send a message to your cleaner..."></textarea>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
              Send Message
            </button>
          </div>
        </div>

        {/* Loyalty & Referral Section */}
        <div className="mt-8">
          <LoyaltyProgram />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
