import React, { useState } from "react";

const QuoteCalculator = () => {
  const [rooms, setRooms] = useState(1);
  const [sqft, setSqft] = useState(500);
  const [service, setService] = useState("Standard Cleaning");
  const [addons, setAddons] = useState([]);
  const [price, setPrice] = useState(50);

  const basePrices = { "Standard Cleaning": 10000, "Deep Cleaning": 19000, "Move-Out Cleaning": 50000 };
  const addonPrices = { "Windows": 15000, "Carpet Cleaning": 35000, "Fridge Cleaning": 20000 };

  const calculatePrice = () => {
    let total = basePrices[service] + rooms * 10 + (sqft / 100) * 5;
    addons.forEach(addon => total += addonPrices[addon]);
    setPrice(total);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold text-blue-700 text-center">Instant Quote</h2>

        <div className="mt-4">
          <label className="font-semibold">Number of Rooms:</label>
          <input type="number" value={rooms} onChange={(e) => setRooms(e.target.value)} min="1" className="border rounded px-3 py-2 w-full"/>
        </div>

        <div className="mt-2">
          <label className="font-semibold">Square Footage:</label>
          <input type="number" value={sqft} onChange={(e) => setSqft(e.target.value)} min="100" className="border rounded px-3 py-2 w-full"/>
        </div>

        <div className="mt-2">
          <label className="font-semibold">Service Type:</label>
          <select value={service} onChange={(e) => setService(e.target.value)} className="border rounded px-3 py-2 w-full">
            {Object.keys(basePrices).map(type => <option key={type} value={type}>{type}</option>)}
          </select>
        </div>

        <div className="mt-2">
          <label className="font-semibold">Add-ons:</label>
          <div className="grid grid-cols-2">
            {Object.keys(addonPrices).map(addon => (
              <label key={addon} className="flex items-center space-x-2">
                <input type="checkbox" value={addon} onChange={(e) => setAddons(prev => e.target.checked ? [...prev, addon] : prev.filter(a => a !== addon))}/>
                <span>{addon} (+₦{addonPrices[addon]})</span>
              </label>
            ))}
          </div>
        </div>

        <button onClick={calculatePrice} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg w-full">Calculate Price</button>

        <h3 className="mt-4 text-xl font-bold text-green-600 text-center">Estimated Price: ₦{price}</h3>
      </div>
    </div>
  );
};

export default QuoteCalculator;
