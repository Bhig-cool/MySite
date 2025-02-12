import React from "react";
import { Card } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section>
        <div>
          <h1 className="text-black text-4xl font-bold text-center mt-20">
            About Our Company
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Creating immaculate environments across Africa</h2>
            <p className="text-gray-600">
              The employees that work for Cleandot are the heart and soul of our organisation. They really mean the world to us and our customers.
            </p>
            <p className="text-gray-600 mt-4">
              We are an equal opportunity employer and recruit on that basis. We are committed to ensuring that our workplaces are free from unlawful or unfair discrimination.
            </p>
            <p className="text-gray-600 mt-4">
              Built into our culture is a relentless focus on our Customers and ensuring we walk the talk. We encourage our team members to speak up and challenge the status quo.
            </p>
          </div>
          <div>
            <img src="/public/abpoot.jpg" alt="Cleaning Supplies" className="rounded-lg shadow-lg w-full h-full" />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-700">Why Choose Sonic?</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto my-3"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our Customers tell us they value our dedication, competence, and attention to our work and their world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Valuing our Customers</h3>
              <p className="text-gray-600 mt-2">
                Over the years, we’ve grown from strength to strength, largely through the power of our Customers’ advocacy.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Valuing our Team</h3>
              <p className="text-gray-600 mt-2">
                Our People are the lifeblood of our organization and our biggest strength.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Our Philosophy</h3>
              <p className="text-gray-600 mt-2">
                We are honest, reliable, and loyal in everything we do. Our Customers trust us with their families and spaces every single day.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Our Standards</h3>
              <p className="text-gray-600 mt-2">
                We hold ourselves accountable for the quality of cleaning and the manner in which it is done.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 text-white">
          <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-blue-400 mb-4 text-center">Explore our data management system</h2>
            <p className="text-gray-300 text-center mb-8">
              Our Customer Access Data System (CADS) is a sophisticated online compliance and reporting tool that provides all the information you need at the touch of a button.
            </p>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">First Name*</label>
                  <input type="text" className="w-full p-3 bg-gray-700 rounded text-white" />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Last Name*</label>
                  <input type="text" className="w-full p-3 bg-gray-700 rounded text-white" />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email*</label>
                  <input type="email" className="w-full p-3 bg-gray-700 rounded text-white" />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Phone Number</label>
                  <input type="text" className="w-full p-3 bg-gray-700 rounded text-white" />
                </div>
                <div className="col-span-2">
                  <label className="block text-gray-300 mb-2">Company Name*</label>
                  <input type="text" className="w-full p-3 bg-gray-700 rounded text-white" />
                </div>
                <div className="col-span-2">
                  <label className="block text-gray-300 mb-2">Sector</label>
                  <select className="w-full p-3 bg-gray-700 rounded text-white">
                    <option>Please Select</option>
                    <option>Healthcare</option>
                    <option>Education</option>
                    <option>Manufacturing</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="text-center mt-6">
                <button type="submit" className="px-6 py-3 bg-blue-500 text-gray-900 font-semibold rounded-lg hover:bg-blue-400 transition">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
