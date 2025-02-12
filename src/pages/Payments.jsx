import React, { useState } from "react";

const Payments = () => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      window.location.reload(); // Refresh the page after showing success message
    }, 3000); // Refresh after 3 seconds
  };

  return (
    <section className="py-20 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">

        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Complete Your Payment
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Secure your cleaning service by making a payment.
        </p>

        {/* Success Alert */}
        {showSuccess && (
          <div className="bg-green-100 text-green-700 p-3 rounded-lg mb-4 text-center">
            ✅ Payment Successful! Thank you for your order.
          </div>
        )}

        {/* Payment Form */}
        <form className="space-y-4" onSubmit={handlePayment}>
          {/* Name */}
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required 
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700">Email Address</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required 
            />
          </div>

          {/* Amount */}
          <div>
            <label className="block text-gray-700">Amount to Pay (₦)</label>
            <input 
              type="number" 
              placeholder="Enter amount" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required 
            />
          </div>

          {/* Payment Method Selection */}
          <div>
            <label className="block text-gray-700">Select Payment Method</label>
            <select 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bankTransfer">Bank Transfer</option>
            </select>
          </div>

          {/* Credit Card Fields (if selected) */}
          {paymentMethod === "creditCard" && (
            <div>
              <label className="block text-gray-700">Card Number</label>
              <input 
                type="text" 
                placeholder="1234 5678 9012 3456" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required 
              />

              <div className="flex space-x-4 mt-4">
                <div>
                  <label className="block text-gray-700">Expiry Date</label>
                  <input 
                    type="text" 
                    placeholder="MM/YY" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    required 
                  />
                </div>

                <div>
                  <label className="block text-gray-700">CVV</label>
                  <input 
                    type="text" 
                    placeholder="123" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    required 
                  />
                </div>
              </div>
            </div>
          )}

          {/* PayPal Instructions */}
          {paymentMethod === "paypal" && (
            <p className="text-blue-600 text-sm">
              You will be redirected to PayPal to complete your payment.
            </p>
          )}

          {/* Bank Transfer Instructions */}
          {paymentMethod === "bankTransfer" && (
            <p className="text-blue-600 text-sm">
              Please transfer the amount to <strong>Bank OPAY, Acc: 9035755983</strong>.
            </p>
          )}

          {/* Pay Button */}
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
           <a href="http://localhost:5173/dashboard" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">Pay Now</a> 
          </button>
        </form>
      </div>
    </section>
  );
};

export default Payments;
