import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="bg-gray-100 flex justify-evenly p-4">
      <Link to="/" className="bg-gray-300 p-2">Home</Link>
      <Link to="/login" className="bg-gray-300 p-2">Login</Link>
      <Link to="/register" className="bg-gray-300 p-2">Register</Link>
    </div>
  );
};

export default TopNav;
