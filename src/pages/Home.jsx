import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("username")

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome, {user}!</h1>
      <button
        onClick={() => navigate("/customer")}
        className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white font-semibold transition-colors"
      >
        Go to Customers
      </button>
    </div>
  );
};

export default Home;
