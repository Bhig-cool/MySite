import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Payments from "./Pages/Payments";
import LoyaltyProgram from "./Pages/LoyaltyProgram";
import AboutUs from "./Components/AboutUs";
import Services from "./Pages/Services";
import House from "./Pages/House";
import DoneAppointments from "./Pages/DoneAppointments";
import Appointment from "./Pages/Appointment";
import FreeQuote from "./Pages/FreeQuote";
import ContactUs from "./Pages/ContactUs";
import Refer from "./Pages/Refer";
import Invoice from "./Pages/Invoice";
import SignUp from "./Pages/SignUp";
import PaymentHistory from "./Pages/PaymentHistory";
import QuoteCalculator from "./Components/QuoteCalculator";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import GetInTouch from "./Pages/GetInTouch";
import NotFound from "./Pages/NotFound"; // Handle 404 errors

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  // ✅ Hook to get the current route
  const location = useLocation();

  // ✅ Define routes where the Navbar should be hidden
  const hideNavbarRoutes = ["/dashboard", "/loyaltyprogram"];

  return (
    <>
      {/* Show Navbar only on allowed routes */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />}

      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/doneappointments" element={<DoneAppointments />} />
        <Route path="/paymenthistory" element={<PaymentHistory />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/house" element={<House />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/appointment" element={isLoggedIn ? <Appointment /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/freequote" element={<FreeQuote />} />
        <Route path="/refer" element={<Refer />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/quotecalculator" element={<QuoteCalculator />} />
        <Route path="/getintouch" element={<GetInTouch />} />

        {/* Login Route */}
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

        {/* ✅ Protected Routes */}
        <Route 
          path="/dashboard" 
          element={isLoggedIn ? <Dashboard setIsLoggedIn={setIsLoggedIn} /> : <Login setIsLoggedIn={setIsLoggedIn} />} 
        />
        <Route 
          path="/loyaltyprogram" 
          element={isLoggedIn ? <LoyaltyProgram setIsLoggedIn={setIsLoggedIn} /> : <Login setIsLoggedIn={setIsLoggedIn} />} 
        />

        {/* 404 Page (For unknown routes) */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer should always be visible */}
      <Footer />
    </>
  );
}


function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
