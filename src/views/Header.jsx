import React from "react";

export default function Header() {
  return (
    <div className="topnav">
      <div>
        <a href="#home">Home</a>
        <a href="#news">Shop</a>
      </div>
      <div className="left">
        <a href="#contact">Login</a>
        <a href="#about">Register</a>
      </div>
    </div>
  );
}
