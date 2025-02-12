import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("📩 Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10">
      <div className="max-w-3xl w-full bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-blue-700 text-center">Get in Touch</h2>
        <p className="text-center text-gray-600 mt-2">We'd love to hear from you!</p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-28"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Details */}
      <div className="mt-10 text-center">
        <h3 className="text-2xl font-semibold text-blue-700">Our Contact Details</h3>
        <p className="text-gray-600 mt-2">Feel free to reach us through the following:</p>

        <div className="mt-4 space-y-3">
          <p className="flex items-center justify-center text-gray-700">
            <FaPhone className="text-blue-600 mr-2" /> +1 234 567 890
          </p>
          <p className="flex items-center justify-center text-gray-700">
            <FaEnvelope className="text-blue-600 mr-2" /> support@soniccleaning.com
          </p>
          <p className="flex items-center justify-center text-gray-700">
            <FaMapMarkerAlt className="text-blue-600 mr-2" /> 123 Cleaning Street, City, Country
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center mt-6 space-x-4">
          <a href="#" className="text-blue-600 hover:text-blue-800 text-xl"><FaFacebook /></a>
          <a href="#" className="text-blue-400 hover:text-blue-600 text-xl"><FaTwitter /></a>
          <a href="#" className="text-pink-500 hover:text-pink-700 text-xl"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
