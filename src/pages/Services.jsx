import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 mt-16">

        {/* Hero Section */}
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Professional Cleaning Services
          </motion.h1>
          <motion.div
            className="w-20 h-1 bg-blue-600 mx-auto my-3"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          ></motion.div>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            We provide top-notch cleaning services to keep your home and office spotless. Book a cleaner today!
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Service 1 */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transform transition duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/public/house.jpg"
              alt="House Cleaning"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-gray-700">House Cleaning</h3>
            <p className="text-gray-600">Keep your home fresh and spotless with our expert cleaners.</p>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transform transition duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/public/office.jpg"
              alt="Office Cleaning"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-gray-700">Office Cleaning</h3>
            <p className="text-gray-600">Maintain a clean and professional workspace effortlessly.</p>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transform transition duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/public/factory.jpg"
              alt="Factory Cleaning"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-gray-700">Factory Cleaning</h3>
            <p className="text-gray-600">Ensure hygiene and safety in industrial environments.</p>
          </motion.div>
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center mt-16">
          <motion.h2
            className="text-3xl font-bold text-gray-800"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Why Choose Us?
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-blue-600 mx-auto my-3"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          ></motion.div>
          <motion.p
            className="text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Our professional cleaners are experienced, reliable, and dedicated to providing top-quality service.  
            Whether it's a home, office, or industrial space, we get the job done right!
          </motion.p>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <a
            href="/Appointment"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition no-underline"
          >
            Book a Cleaning Service
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
