import React from "react";

const Invoice = () => {
  const invoiceData = {
    invoiceNumber: "INV-20240213",
    date: "2024-02-13",
    customer: {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "+234 812 345 6789",
    },
    items: [
      { description: "Standard Cleaning", price: 20000 },
      { description: "Carpet Cleaning", price: 35000 },
      { description: "Fridge Cleaning", price: 15000 },
    ],
    status: "Paid", // Change to "Pending" if needed
  };

  const calculateTotal = () => {
    return invoiceData.items.reduce((total, item) => total + item.price, 0);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-700">Invoice</h1>
          <p className="text-gray-500">Invoice Number: {invoiceData.invoiceNumber}</p>
          <p className="text-gray-500">Date: {invoiceData.date}</p>
        </div>

        {/* Customer Info */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700">Customer Details</h2>
          <p className="text-gray-600">Name: {invoiceData.customer.name}</p>
          <p className="text-gray-600">Email: {invoiceData.customer.email}</p>
          <p className="text-gray-600">Phone: {invoiceData.customer.phone}</p>
        </div>

        {/* Invoice Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3 border">Description</th>
                <th className="p-3 border">Price (₦)</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.items.map((item, index) => (
                <tr key={index} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} text-center`}>
                  <td className="p-3 border">{item.description}</td>
                  <td className="p-3 border">₦{item.price.toLocaleString()}</td>
                </tr>
              ))}
              <tr className="bg-gray-200 font-bold text-center">
                <td className="p-3 border">Total</td>
                <td className="p-3 border">₦{calculateTotal().toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Payment Status */}
        <div className="mt-4 text-center">
          <p className={`text-lg font-semibold ${invoiceData.status === "Paid" ? "text-green-600" : "text-orange-600"}`}>
            Status: {invoiceData.status}
          </p>
        </div>

        {/* Print Button */}
        <div className="mt-6 text-center">
          <button
            onClick={handlePrint}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Print Invoice
          </button>
        </div>
      </div>
    </section>
  );
};

export default Invoice;
