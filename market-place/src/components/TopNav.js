import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="bg-gray-100 flex justify-evenly p-4">
      <div className="bg-gray-300">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default TopNav;
