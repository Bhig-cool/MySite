import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navbar = ({ isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className="fixed  top-0 left-0 w-full bg-gray-900 shadow-md px-6 py-4 flex justify-between items-center z-50">
        <motion.img
          src="/public/sonicblack-removebg-preview.png"
          alt="Cleaning Company Logo"
          width={200}
          height={100}
          className="h-20 w-auto cursor-pointer transition-transform duration-300 hover:scale-110 "
          onClick={() => navigate("/")}
        />

        <div className="hidden lg:flex items-center space-x-6 gap-10 mt-10">
          {["Home", "About Us", "Services", "Contact Us"].map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(`/${item.toLowerCase().replace(/\s+/g, "")}`)}
              className="text-white font-medium text-sm hover:text-yellow-400 transition duration-300 hover:scale-105"
            >
              {item}
            </button>
          ))}
        </div>

        {/* ✅ Conditionally Show Login or Dashboard Button */}
        {isLoggedIn ? (
          <motion.button
            onClick={() => navigate("/dashboard")}
            whileHover={{ scale: 1.1 }}
            className="bg-green-500 text-white px-4 py-2 rounded-md font-medium shadow-md text-sm transition-transform hover:bg-green-600"
          >
            Dashboard
          </motion.button>
        ) : (
          <motion.button
            onClick={() => navigate("/login")}
            whileHover={{ scale: 1.1 }}
            className="bg-blue-500 text-white px-4 py-2 rounded-md font-medium shadow-md text-sm transition-transform hover:bg-blue-600"
          >
            Login
          </motion.button>
        )}

        <button
          className="lg:hidden text-blue-400 text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black px-6 py-4 absolute w-full left-0 top-16 shadow-md z-50"
          >
            {["Home", "About Us", "Services", "Contact Us"].map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  navigate(`/${item.toLowerCase().replace(/\s+/g, "")}`);
                  setIsOpen(false);
                }}
                className="block py-2 text-sm font-medium text-white transition duration-300 hover:text-blue-400 hover:translate-x-2"
              >
                {item}
              </button>
            ))}

            {/* ✅ Conditionally Show Login or Dashboard Button */}
            {isLoggedIn ? (
              <motion.button
                onClick={() => navigate("/dashboard")}
                whileHover={{ scale: 1.05 }}
                className="block bg-green-500 text-white w-full text-left px-4 py-2 rounded-md font-medium shadow-md text-sm transition-transform hover:bg-green-600 mt-4"
              >
                Dashboard
              </motion.button>
            ) : (
              <motion.button
                onClick={() => navigate("/login")}
                whileHover={{ scale: 1.05 }}
                className="block bg-blue-500 text-white w-full text-left px-4 py-2 rounded-md font-medium shadow-md text-sm transition-transform hover:bg-blue-600 mt-4"
              >
                Login
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
