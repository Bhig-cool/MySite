import React, { useState, useEffect } from "react";

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Generating 50 Successful Payments
    const successfulPayments = Array.from({ length: 50 }, (_, index) => ({
      id: index + 1,
      date: `2024-01-${(index % 30) + 1}`, // Random date in January
      amount: Math.floor(Math.random() * 50000) + 7000, // Random amount between 5k-50k
      method: ["Credit Card", "PayPal", "Bank Transfer", "Cash"][index % 4], // Random method
      status: "Success",
    }));

    // Generating 10 Pending Payments
    const pendingPayments = Array.from({ length: 10 }, (_, index) => ({
      id: 51 + index,
      date: `2024-02-${(index % 28) + 1}`, // Random date in February
      amount: Math.floor(Math.random() * 50000) + 5000,
      method: ["Credit Card", "PayPal", "Bank Transfer", "Cash"][index % 4],
      status: "Pending",
    }));

    // Combine both lists
    setPayments([...successfulPayments, ...pendingPayments]);
  }, []);

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-4">Payment History</h1>
        <p className="text-gray-600 text-center mb-6">Review your past transactions</p>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3 border">Date</th>
                <th className="p-3 border">Amount (₦)</th>
                <th className="p-3 border">Payment Method</th>
                <th className="p-3 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={payment.id} className={`text-center ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                  <td className="p-3 border">{payment.date}</td>
                  <td className="p-3 border">₦{payment.amount.toLocaleString()}</td>
                  <td className="p-3 border">{payment.method}</td>
                  <td
                    className={`p-3 border font-semibold ${
                      payment.status === "Success" ? "text-green-600" : "text-orange-600"
                    }`}
                  >
                    {payment.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PaymentHistory;
