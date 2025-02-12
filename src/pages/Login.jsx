import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

const imageList = [
  "public/backg1.avif",
  "public/backg2.avif",
  "public/backg3.jpg"
];

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bgImage, setBgImage] = useState(imageList[0]); // Initial background image
  const navigate = useNavigate(); 

  useEffect(() => {
    const interval = setInterval(() => {
      setBgImage((prevImage) => {
        const nextIndex = (imageList.indexOf(prevImage) + 1) % imageList.length;
        return imageList[nextIndex];
      });
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "Bhigdhaddie@gmail.com" && password === "Bhigdhaddie") {
      setIsLoggedIn(true);
      navigate("/dashboard");
    } else {
      alert("❌ Invalid email or password. Try again!");
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email" 
            className="w-full px-4 py-2 border rounded-lg" 
            required 
          />
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" 
            className="w-full px-4 py-2 border rounded-lg" 
            required 
          />
          <p>Don't have an account yet? 
            <a href="/signup" className="text-blue-600 hover:underline"> Sign Up</a>
          </p>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 rounded-lg">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
