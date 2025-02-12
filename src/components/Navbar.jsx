import React, { useState } from "react";
import { FaBars, FaTimes, FaGift } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const Navbar = ({ isLoggedIn, handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // ✅ Initialize navigation

  return (
    <>
      <nav className="bg-gray-900 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          {/* 🔥 Logo */}
          <motion.img
            src="/public/sonicblack-removebg-preview.png"
            alt="Cleaning Company Logo"
            width={200}
            height={80}
            className="h-20 w-auto transition-transform duration-300 hover:scale-110 cursor-pointer"
            onClick={() => navigate("/")} // ✅ Navigate without reload
          />

          {/* 📜 Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {["Home", "About Us", "Services", "Contact Us"].map((item, index) => (
              <button
                key={index}
                onClick={() => navigate(`/${item.toLowerCase().replace(/\s+/g, "")}`)}
                className="text-white font-medium text-sm hover:text-yellow-400 transition duration-300 hover:scale-105"
              >
                {item}
              </button>
            ))}

            {/* 🎁 Refer & Earn Button */}
            <motion.button
              onClick={() => navigate("/refer")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-blue-400 text-black px-4 py-1 rounded-md font-medium shadow-md transition-transform flex items-center text-sm"
            >
              <FaGift className="mr-1" /> Refer & Earn
            </motion.button>

            {/* Conditional Login / Dashboard / Logout */}
            {!isLoggedIn ? (
              <motion.button
                onClick={() => navigate("/login")}
                whileHover={{ scale: 1.05 }}
                className="bg-blue-400 text-black px-4 py-1 rounded-md font-medium shadow-md text-sm transition-transform hover:bg-blue-500"
              >
                Login
              </motion.button>
            ) : (
              <>
                <motion.button
                  onClick={() => navigate("/dashboard")}
                  whileHover={{ scale: 1.05 }}
                  className="bg-green-500 text-black px-4 py-1 rounded-md font-medium shadow-md text-sm transition-transform hover:bg-green-600"
                >
                  My Bookings
                </motion.button>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-1 rounded-md font-medium shadow-md text-sm transition-transform hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            )}

            {/* 🟩 Get in Touch Button */}
            <motion.button
              onClick={() => navigate("/getintouch")} // ✅ Navigate to Get in Touch
              whileHover={{ scale: 1.05 }}
              className="bg-blue-400 text-black px-2 py-1 rounded-md font-medium shadow-md text-sm transition-transform hover:bg-blue-600"
            >
              Get in Touch
            </motion.button>
          </div>

          {/* 📱 Mobile Menu Button */}
          <button
            className="lg:hidden text-blue-400 text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* 📱 Mobile Menu with Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-black px-6 py-4 absolute w-full left-0 top-full shadow-md"
            >
              {["Home", "About Us", "Services", "Contact Us"].map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    navigate(`/${item.toLowerCase().replace(/\s+/g, "")}`);
                    setIsOpen(false); // ✅ Close menu after navigation
                  }}
                  className="block py-2 text-sm font-medium text-white transition duration-300 hover:text-blue-400 hover:translate-x-2"
                >
                  {item}
                </button>
              ))}

              {/* 🎁 Refer & Earn Button in Mobile */}
              <motion.button
                onClick={() => navigate("/refer")}
                whileHover={{ scale: 1.05 }}
                className="block bg-blue-700 text-black w-full text-center py-2 rounded-md mt-3 font-medium shadow-md text-sm"
              >
                Refer & Earn 🎁
              </motion.button>

              {/* Conditional Login / Logout in Mobile */}
              {!isLoggedIn ? (
                <motion.button
                  onClick={() => navigate("/login")}
                  whileHover={{ scale: 1.05 }}
                  className="block bg-blue-500 text-white w-full text-center py-2 rounded-md mt-3 font-medium shadow-md text-sm transition-transform hover:bg-blue-600"
                >
                  Login
                </motion.button>
              ) : (
                <>
                  <motion.button
                    onClick={() => navigate("/dashboard")}
                    whileHover={{ scale: 1.05 }}
                    className="block bg-green-500 text-black w-full text-center py-2 rounded-md mt-3 font-medium shadow-md text-sm transition-transform hover:bg-green-600"
                  >
                    My Bookings
                  </motion.button>
                  <button
                    onClick={handleLogout}
                    className="block bg-red-500 text-white w-full text-center py-2 rounded-md mt-3 font-medium shadow-md text-sm transition-transform hover:bg-red-600"
                  >
                    Logout
                  </button>
                </>
              )}

              {/* 🟩 Get in Touch Button in Mobile */}
              <motion.button
                onClick={() => navigate("/getintouch")} // ✅ Navigate to Get in Touch
                whileHover={{ scale: 1.05 }}
                className="block bg-blue-500 text-black w-full text-center py-2 rounded-md mt-3 font-medium shadow-md text-sm transition-transform hover:bg-blue-600"
              >
                Get in Touch
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
