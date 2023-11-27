import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="bg-gray-100 flex justify-evenly p-4">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default TopNav;
