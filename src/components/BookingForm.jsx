import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeSlot, setTimeSlot] = useState("");
  const [recurring, setRecurring] = useState("none");
  const [service, setService] = useState("Standard Cleaning");

  // Available time slots
  const availableTimeSlots = [
    "08:00 AM - 10:00 AM",
    "10:00 AM - 12:00 PM",
    "12:00 PM - 02:00 PM",
    "02:00 PM - 04:00 PM",
    "04:00 PM - 06:00 PM",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDate || !timeSlot) {
      alert("Please select a date and time slot.");
      return;
    }
    
    // Simulating booking confirmation
    alert(`Booking confirmed for ${selectedDate.toDateString()} at ${timeSlot}`);
    
    // Redirect to Payments page
    navigate("/payments");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold text-blue-700 text-center">Book a Cleaning Service</h2>

      {/* Date Picker */}
      <div className="mt-4">
        <label className="font-semibold">Select a Date:</label>
        <DatePicker 
          selected={selectedDate} 
          onChange={(date) => setSelectedDate(date)} 
          className="border rounded px-3 py-2 w-full"
          minDate={new Date()} 
          placeholderText="Choose a date"
        />
      </div>

      {/* Time Slot Selection */}
      <div className="mt-4">
        <label className="font-semibold">Select a Time Slot:</label>
        <select 
          value={timeSlot} 
          onChange={(e) => setTimeSlot(e.target.value)} 
          className="border rounded px-3 py-2 w-full"
        >
          <option value="">-- Choose a time --</option>
          {availableTimeSlots.map((slot, index) => (
            <option key={index} value={slot}>{slot}</option>
          ))}
        </select>
      </div>

      {/* Recurring Service */}
      <div className="mt-4">
        <label className="font-semibold">Recurring Cleaning:</label>
        <select 
          value={recurring} 
          onChange={(e) => setRecurring(e.target.value)} 
          className="border rounded px-3 py-2 w-full"
        >
          <option value="none">One-time Cleaning</option>
          <option value="weekly">Weekly</option>
          <option value="bi-weekly">Bi-weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      {/* Service Type */}
      <div className="mt-4">
        <label className="font-semibold">Choose a Service:</label>
        <select 
          value={service} 
          onChange={(e) => setService(e.target.value)} 
          className="border rounded px-3 py-2 w-full"
        >
          <option value="Standard Cleaning">Standard Cleaning</option>
          <option value="Deep Cleaning">Deep Cleaning</option>
          <option value="Move-Out Cleaning">Move-Out Cleaning</option>
        </select>
      </div>

      {/* Submit Button */}
      <button 
        onClick={handleSubmit} 
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingForm;
