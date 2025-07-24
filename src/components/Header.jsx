import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  const handleLogout = ()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    navigate("/")
  }

  const user = localStorage.getItem("username");
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
      <nav className="flex items-center gap-8">
        <div className="font-bold text-xl">CRM</div>
        <Link to="/home" className="hover:underline">
          Home
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <span>{user}</span>
        <button
          className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
