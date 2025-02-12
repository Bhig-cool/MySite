import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaCalendarCheck, FaStar } from "react-icons/fa";
import BookingForm from "../components/BookingForm";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    location: "", // New location field
    service: "House Cleaning",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment Request Submitted! 🎉");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold"
        >
          Book Your Cleaning Appointment Today!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg mt-4"
        >
          A sparkling clean home or office is just a click away.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 bg-blue-500 text-black px-6 py-3 rounded font-semibold shadow-lg transition-transform"
        >
          <a href="http://localhost:5173/FreeQuote" className="text-black no-underline">
            Get a Free Quote
          </a>
        </motion.button>
      </section>

      {/* Appointment Booking Form */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-700 text-center">
            Schedule Your Cleaning
          </h2>
          <p className="text-center text-gray-600 mt-2">
            Fill out the form below and we’ll get in touch with you soon.
          </p>
          <div className="max-w-lg mx-auto mt-8 bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="text-gray-700 font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg mt-1"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-gray-700 font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg mt-1"
                  placeholder="example@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-gray-700 font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg mt-1"
                  placeholder="+1 234 567 890"
                />
              </div>

              {/* Location (New Field) */}
              <div>
                <label className="text-gray-700 font-medium">Service Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg mt-1"
                  placeholder="Enter your address or location"
                />
              </div>

              {/* Date */}
              <div>
                <label className="text-gray-700 font-medium">Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg mt-1"
                />
              </div>

              {/* Service Selection */}
              <div>
                <label className="text-gray-700 font-medium">Select Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg mt-1"
                >
                  <option>House Cleaning</option>
                  <option>Office Cleaning</option>
                  <option>Deep Cleaning</option>
                  <option>Carpet Cleaning</option>
                  <option>Move-In/Move-Out Cleaning</option>
                </select>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold w-full mt-4 shadow-md transition-transform"
              >
                <a href="http://localhost:5173/payments" className="no-underline text-white">
                  Book Appointment
                </a>
              </motion.button>
            </form>
          </div>
        </div>
      </section>

      {/* Floating Call Button */}
      <motion.div
        className="fixed bottom-10 right-10 bg-blue-400 text-black px-6 py-3 rounded-full font-semibold shadow-lg cursor-pointer hover:scale-110 transition-transform flex items-center gap-2"
        whileHover={{ scale: 1.2 }}
      >
        <FaPhoneAlt />{" "}
        <a href="https://wa.me/message/F4QR747EJCNMO1" className="text-black no-underline">
          Call Us Now
        </a>
      </motion.div>
      
    </div>
  );
};

export default Appointment;
