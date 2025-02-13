import React, { useState, useEffect } from "react";

const DoneAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Generating 50 Completed Appointments
    const completedAppointments = Array.from({ length: 50 }, (_, index) => ({
      id: index + 1,
      date: `2024-01-${(index % 30) + 1}`, // Random date in January
      service: ["Deep Cleaning", "Carpet Cleaning", "Move-Out Cleaning", "Standard Cleaning"][
        index % 4
      ],
      status: "Completed",
    }));

    // Generating 10 Pending Appointments
    const pendingAppointments = Array.from({ length: 10 }, (_, index) => ({
      id: 51 + index,
      date: `2024-02-${(index % 28) + 1}`, // Random date in February
      service: ["Deep Cleaning", "Carpet Cleaning", "Move-Out Cleaning", "Standard Cleaning"][
        index % 4
      ],
      status: "Pending",
    }));

    // Combine both lists
    setAppointments([...completedAppointments, ...pendingAppointments]);
  }, []);

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-4">Completed & Pending Appointments</h1>
        <p className="text-gray-600 text-center mb-6">Review your past and upcoming appointments</p>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3 border">Date</th>
                <th className="p-3 border">Service</th>
                <th className="p-3 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={appointment.id} className={`text-center ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                  <td className="p-3 border">{appointment.date}</td>
                  <td className="p-3 border">{appointment.service}</td>
                  <td
                    className={`p-3 border font-semibold ${
                      appointment.status === "Completed" ? "text-green-600" : "text-orange-600"
                    }`}
                  >
                    {appointment.status}
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

export default DoneAppointments;
