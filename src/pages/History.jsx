import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";

const transactions = [
  {
    id: "TXN12345",
    date: "2024-02-10",
    service: "House Cleaning",
    amount: "$50.00",
    status: "Completed",
  },
  {
    id: "TXN12346",
    date: "2024-02-08",
    service: "Office Cleaning",
    amount: "$120.00",
    status: "Pending",
  },
  {
    id: "TXN12347",
    date: "2024-02-05",
    service: "Factory Cleaning",
    amount: "$200.00",
    status: "Cancelled",
  },
];

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Fetch user transaction history from backend (replace this with API call)
    setTimeout(() => {
      setHistory(transactions);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#1E3A8A] text-center mb-6">
          🕒 Your Booking & Payment History
        </h1>

        {history.length === 0 ? (
          <p className="text-center text-lg text-gray-600">Loading transactions...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-[#1E3A8A] text-white">
                <tr>
                  <th className="py-3 px-6 text-left">Transaction ID</th>
                  <th className="py-3 px-6 text-left">Date</th>
                  <th className="py-3 px-6 text-left">Service</th>
                  <th className="py-3 px-6 text-left">Amount</th>
                  <th className="py-3 px-6 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {history.map((txn, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="py-4 px-6 font-semibold">{txn.id}</td>
                    <td className="py-4 px-6">{txn.date}</td>
                    <td className="py-4 px-6">{txn.service}</td>
                    <td className="py-4 px-6 font-bold">{txn.amount}</td>
                    <td className="py-4 px-6">
                      {txn.status === "Completed" && (
                        <span className="text-green-600 flex items-center">
                          <FaCheckCircle className="mr-2" /> {txn.status}
                        </span>
                      )}
                      {txn.status === "Pending" && (
                        <span className="text-yellow-500 flex items-center">
                          <FaClock className="mr-2" /> {txn.status}
                        </span>
                      )}
                      {txn.status === "Cancelled" && (
                        <span className="text-red-600 flex items-center">
                          <FaTimesCircle className="mr-2" /> {txn.status}
                        </span>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
