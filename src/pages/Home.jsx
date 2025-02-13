import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import QuoteCalculator from "../components/QuoteCalculator";

// Image paths (Ensure these images exist in the 'public' folder)
const images = [
  "/concept-cleaning-services.webp",
  "/yesss.webp",
  "/badman.jpg",
  "/badgirl.jpg",
  "/bihg4.jpg"
];

// Image Slider Component
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => nextImage(), 3000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const goToImage = (index) => setCurrentIndex(index);

  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-lg mt-16">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt="Cleaning Service"
          className="object-cover w-full h-full rounded-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* Left Arrow */}
      <button onClick={prevImage} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-900/50 text-white p-3 rounded-full hover:bg-gray-900 transition">
        <FaArrowLeft size={20} />
      </button>

      {/* Right Arrow */}
      <button onClick={nextImage} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-900/50 text-white p-3 rounded-full hover:bg-gray-900 transition">
        <FaArrowRight size={20} />
      </button>

      {/* Dots (Pagination) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button key={index} onClick={() => goToImage(index)} className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-black-400 scale-110" : "bg-gray-400"} transition-transform`}></button>
        ))}
      </div>
    </div>
  );
};

// Services
const services = [
  { title: "House Cleaning", description: "Come home to a spotless house. Book now!", image: "/house.jpg" },
  { title: "Office Cleaning", description: "Keep your workplace fresh & clean.", image: "/offclean.webp" },
  { title: "Factory Cleaning", description: "Industrial-grade cleaning for your workspace.", image: "/factory.jpg" },
];

// Testimonials
const testimonials = [
  { name: "Mubeen", review: "My house has never been this clean! Highly recommended!", image: "/sarah.jpg" },
  { name: "Aisha", review: "Super professional service! Booking again soon.", image: "/david.jpg" },
];

// Home Page Component
const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#1E3A8A] text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-6">
              <span className="text-[#fff] uppercase tracking-wider font-semibold">SONIC CLEANING COMPANY</span>
              <h1 className="text-5xl font-bold leading-tight">
                A Cleaner Home, A Happier <span className="text-[#fff]">You!</span>
              </h1>
              <p className="text-lg opacity-90">
                Let us handle the mess while you enjoy the rest. Book our professional cleaning service today!
              </p>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-[#121212] text-[#fff] px-6 py-3 rounded font-semibold shadow-md transition-transform">
                <a href="http://localhost:5173/Appointment" className="no-underline text-white"> Get a Spotless Home Today!</a>
              </motion.button>
            </motion.div>

            {/* Image Slideshow */}
            <ImageSlider />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#F3F4F6]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h6 className="text-[#1E3A8A] uppercase font-semibold mb-2">OUR BEST SERVICES</h6>
            <h2 className="text-3xl font-bold text-[#1E3A8A]">We Are Offering The Best Cleaning Services For You</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
            {services.map((service, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="overflow-hidden shadow-lg rounded-lg bg-white">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#1E3A8A]">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Section */}
      <section className="bg-[#1e358e] text-[#f7f7f8] py-12 text-center">
        <h2 className="text-3xl font-bold">Love Our Service? Refer a Friend & Earn Rewards! 🎉</h2>
        <p className="mt-4 text-lg">Invite your friends & get <strong>10% OFF</strong> your next cleaning.</p>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-[#0d0e0f] text-white px-6 py-3 rounded-lg mt-6 font-semibold shadow-md transition-transform">
         <a href="/Refer" className="text-white no-underline">Refer Now</a> 
        </motion.button>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-20 text-center">
        <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6">What Our Happy Customers Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="bg-[#F3F4F6] p-6 rounded-lg shadow-lg max-w-sm">
              <p className="text-lg font-semibold">"{testimonial.review}"</p>
              <p className="text-[#1E3A8A] mt-2">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-blue-700 text-center">Welcome to Our Cleaning Services</h1>
        <p className="text-center text-gray-600 mt-2">
          Get an instant price estimate and book your cleaning today!
        </p>

        {/* Embed Quote Calculator */}
        <QuoteCalculator />

      </div>
    </div>
    </div>
  );
};

export default Home;
