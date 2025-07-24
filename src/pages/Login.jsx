import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const api_domain = import.meta.env.VITE_API_DOMAIN;
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    setData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(`${api_domain}/`, data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.username);
      alert("Logged in successfully");
      navigate("/home");
    } catch (error) {
      alert("User not found");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form className="bg-gray-800 text-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <fieldset className="mb-4">
          <legend className="mb-1 font-semibold">Email</legend>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full px-3 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
        </fieldset>
        <fieldset className="mb-4">
          <legend className="mb-1 font-semibold">Password</legend>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="w-full px-3 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
        </fieldset>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition-colors cursor-pointer"
          onClick={handleSubmit}
        >
          Login
        </button>
        <p className="mt-4 text-center text-gray-400">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-400 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
