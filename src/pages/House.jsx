import React from "react";
import { motion } from "framer-motion";
import { FaBroom, FaHandsWash, FaCheckCircle, FaStar } from "react-icons/fa";

const services = [
  {
    title: "Deep Cleaning",
    description: "Thorough and professional deep cleaning for every corner of your home.",
    icon: <FaBroom className="text-4xl text-yellow-400" />,
  },
  {
    title: "Carpet Cleaning",
    description: "We use eco-friendly solutions to remove stains and odors from carpets.",
    icon: <FaHandsWash className="text-4xl text-yellow-400" />,
  },
  {
    title: "Kitchen Cleaning",
    description: "Say goodbye to grease and dirt with our kitchen deep-cleaning service.",
    icon: <FaCheckCircle className="text-4xl text-yellow-400" />,
  },
];

const stats = [
  { label: "Happy Clients", value: "2500+" },
  { label: "Projects Completed", value: "1800+" },
  { label: "Trained Staff", value: "150+" },
];

const testimonials = [
  { name: "Mubeen", text: "Fantastic service! My house has never been cleaner.", rating: 5 },
  { name: "Ridwan", text: "Friendly and professional staff. Highly recommended!", rating: 4.5 },
  { name: "Abdulmalik", text: "Affordable and great quality work. Will hire again!", rating: 5 },
];

const House = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold"
        >
          Professional House Cleaning Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg mt-4"
        >
          Enjoy a sparkling clean home without lifting a finger.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded font-semibold shadow-lg transition-transform"
        >
          Get a Free Quote
        </motion.button>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-600">Our Cleaning Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 shadow-lg rounded-lg text-center hover:shadow-2xl"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-blue-600">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3 }}
                className="bg-white text-blue-600 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-4xl font-bold">{stat.value}</h3>
                <p className="mt-2 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-600">What Our Clients Say</h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {testimonials.map((review, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 shadow-lg rounded-lg text-center hover:shadow-2xl"
              >
                <p className="text-gray-600 italic">"{review.text}"</p>
                <h3 className="mt-4 text-xl font-semibold">{review.name}</h3>
                <div className="mt-2 text-yellow-400 flex justify-center">
                  {[...Array(Math.round(review.rating))].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.div
        className="fixed bottom-10 right-10 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold shadow-lg cursor-pointer hover:scale-110 transition-transform"
        whileHover={{ scale: 1.2 }}
      >
        Contact Us Now!
      </motion.div>
    </div>
  );
};

export default House;
