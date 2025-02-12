import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGift, FaCheckCircle, FaShareAlt } from "react-icons/fa";

const Refer = () => {
  const [email, setEmail] = useState("");
  const [friendEmail, setFriendEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 🎉 Hero Section */}
      <section className="bg-gradient-to-r from-[#1E3A8A] to-[#00A9FF] text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-extrabold">
            Refer & Earn <span className="text-yellow-300">10% OFF!</span> 🎁
          </h1>
          <p className="text-lg mt-4 font-medium">
            Invite your friends & enjoy **exclusive rewards** when they book a cleaning service.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-6 bg-blue-400 text-[#1E3A8A] px-8 py-3 font-semibold text-lg rounded-lg shadow-lg"
          >
            Invite a Friend 🚀
          </motion.button>
        </div>
      </section>

      {/* 💌 Referral Form Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-xl bg-white p-10 rounded-lg shadow-2xl">
          <h2 className="text-3xl font-bold text-center text-[#1E3A8A] mb-6">
            Share the Love & Get Rewarded! 💰
          </h2>

          {success && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-600 text-center mb-4 font-semibold"
            >
              🎉 Success! Your referral has been sent.
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="email"
              placeholder="Friend's Email"
              value={friendEmail}
              onChange={(e) => setFriendEmail(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#1E3A8A] text-white px-6 py-3 w-full rounded-lg font-bold text-lg shadow-md"
            >
              Send Referral 🚀
            </motion.button>
          </form>
        </div>
      </section>

      {/* ⭐ How It Works Section */}
      <section className="py-16 bg-[#F3F4F6] text-center">
        <h2 className="text-3xl font-bold text-[#1E3A8A]">How It Works</h2>
        <div className="container mx-auto px-6 mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: "1️⃣", title: "Invite Your Friend", description: "Enter their email & send an invite.", icon: <FaShareAlt size={30} className="text-[#1E3A8A]" /> },
            { step: "2️⃣", title: "They Book a Service", description: "Your friend books a cleaning appointment.", icon: <FaCheckCircle size={30} className="text-green-500" /> },
            { step: "3️⃣", title: "You Get 10% OFF", description: "Enjoy your well-deserved discount!", icon: <FaGift size={30} className="text-yellow-400" /> },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              <div className="p-4 bg-gray-200 rounded-full">{item.icon}</div>
              <h3 className="text-xl font-bold mt-4 text-[#1E3A8A]">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📣 Customer Testimonials */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-[#1E3A8A]">See What Others Are Saying</h2>
        <div className="container mx-auto px-6 mt-8 flex flex-wrap justify-center gap-8">
          {[
            { name: "Jessica W.", review: "Referred my best friend and got 10% off. So easy!", image: "/jessica.jpg" },
            { name: "Michael T.", review: "Fast, easy, and rewarding. Love it!", image: "/michael.jpg" },
          ].map((testimonial, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="bg-[#F3F4F6] p-6 rounded-lg shadow-lg max-w-sm">
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
              <p className="text-lg font-semibold">"{testimonial.review}"</p>
              <p className="text-[#1E3A8A] mt-2">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Refer;
