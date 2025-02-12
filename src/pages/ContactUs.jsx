import React, { useState } from "react";

const ContactUs = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  // Function to handle form submission
  const handleButtonClick = (e) => {
    e.preventDefault(); // Prevent default form submission
    setShowSuccess(true); // Show the success animation
    setTimeout(() => {
      alert("Thank you for your message! We will get back to you shortly.");
      window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
      window.location.reload(); // Refresh the page
    }, 2000); // Wait 2 seconds before refreshing
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="container mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-700">
            Get in Touch ✨
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto my-3"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question? Reach out to us, and we’ll be happy to help!
          </p>
        </div>

        {/* Success Message Animation */}
        {showSuccess && (
          <div className="text-center mb-6">
            <div className="flex justify-center items-center space-x-3">
              <span className="text-3xl text-green-500">🎉</span>
              <h3 className="text-2xl font-bold text-green-600">
                Message Sent Successfully!
              </h3>
            </div>
            <p className="text-gray-500">Refreshing the page...</p>
          </div>
        )}

        {/* Contact Info & Form */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 ${showSuccess ? "opacity-50 pointer-events-none" : ""}`}>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Details</h3>
            <p className="text-gray-600 mb-4">
              Feel free to reach out to us for any inquiries or cleaning service requests.
            </p>
            <div className="space-y-4">
              <p className="text-gray-700">
                📍 <strong>Address:</strong> 697 Gra, Nigeria, 240101
              </p>
              <p className="text-gray-700">
                📧 <strong>Email:</strong> Sonic@gmail.com
              </p>
              <p className="text-gray-700">
                📞 <strong>Phone:</strong> +234-9035-7559-83
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Send Us a Message</h3>
            <form className="space-y-4" onSubmit={handleButtonClick}>
              <div>
                <label className="block text-gray-700 font-semibold">Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold">Message</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message here..."
                  rows="4"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-transform duration-200"
              >
                Send Message 🚀
              </button>
            </form>
          </div>

        </div>

        {/* Optional Google Map Embed */}
        <div className="mt-12">
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093704!2d144.95373531531494!3d-37.81720997975143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sNew%20York!5e0!3m2!1sen!2sus!4v1617584567892!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;
