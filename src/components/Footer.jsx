import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 🏆 About Section */}
        <div>
          <motion.img
            src="/public/sonicblack-removebg-preview.png"
            alt="Sonic Logo"
            width={200}
            height={80}
            className="mb-4"
            whileHover={{ scale: 1.1 }}
          />
          <p className="text-gray-400">
            Sonic provides top-quality cleaning services to make your space shine. Your satisfaction is our priority! ✨
          </p>
        </div>

        {/* 🔗 Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-blue-500 mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {["Home", "About Us", "Services", "Refer & Earn", "Contact Us", "View History"].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1, x: 5 }}
                className="transition duration-300"
              >
                <a href={`/${item.toLowerCase().replace(" & ", "").replace(" ", "")}`} className="text-gray-400 hover:text-blue-500">
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* 📞 Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-blue-500 mb-4">Contact Us</h3>
          <p className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-blue-500" /> 
            <span>123 ilofa Rd, Ilorin</span>
          </p>
          <p className="flex items-center space-x-3 mt-3">
            <FaPhoneAlt className="text-blue-500" /> 
            <span>(234) 9056-78905</span>
          </p>
          <p className="flex items-center space-x-3 mt-3">
            <FaEnvelope className="text-blue-500" /> 
            <span>support@soniccleaning.com</span>
          </p>
        </div>
      </div>

      {/* 🌍 Social Media & Copyright */}
      <div className="text-center mt-10">
        <h3 className="text-lg font-semibold text-blue-500">Follow Us</h3>
        <div className="flex justify-center space-x-6 mt-4">
          {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, index) => (
            <motion.a
              key={index}
              href="https://www.instagram.com/bhig.dhaddie?igsh=MW1icWlnMXc2cGM1"
              whileHover={{ scale: 1.2 }}
              className="p-3 bg-blue-500 text-black rounded-full transition"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>
        <p className="text-white-500 mt-6">&copy; {new Date().getFullYear()} Sonic Cleaning. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
