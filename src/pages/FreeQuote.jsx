import React from "react";

const FreeQuote = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Get a Free Quote</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto my-3"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fill out the form below, and we'll get back to you with a personalized quote tailored to your needs.
          </p>
        </div>

        {/* Quote Form */}
        <form className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Fields */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-200"
                required
              />
            </div>

            {/* Contact Fields */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-200"
                required
              />
            </div>
          </div>

          {/* Service Details */}
          <div className="mt-6">
            <label className="block text-gray-700 font-semibold mb-2">What Service Do You Need?</label>
            <select
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-200"
              required
            >
              <option value="" disabled selected>
                Select a service
              </option>
              <option>House Cleaning</option>
              <option>Office Cleaning</option>
              <option>Factory Cleaning</option>
              <option>Other</option>
            </select>
          </div>

          {/* Message */}
          <div className="mt-6">
            <label className="block text-gray-700 font-semibold mb-2">Additional Details</label>
            <textarea
              placeholder="Tell us more about your needs..."
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-200"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
            >
              Request a Quote
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FreeQuote;
