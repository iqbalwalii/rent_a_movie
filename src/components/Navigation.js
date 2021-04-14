import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import Search from "./Search";
const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <li>
          <Link to="/">
            <img src="./assets/images/logo.png" />
          </Link>
        </li>
      </div>
      <Search />
      <ul className="nav_links">
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export { Navigation };
