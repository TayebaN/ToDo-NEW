import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">ToDo</Link>
        <Link to="/Play">Play</Link>
        <Link to="/about">About</Link>
      </div>
      <h2>You can organize your TASKS here!</h2>
    </header>
  );
};

export default Header;
