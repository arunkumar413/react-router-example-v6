import React from "react";
import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="container">
      <div className="sidebar-container">
        <h3>Side bar </h3>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/">Home </Link>
        <Link to="/stuff">Home stuff</Link>
        <Link to="/1">Home param 1</Link>
      </div>

      <div className="main-container">
        <Outlet />
      </div>

      <Link to="/login">go to login</Link>
    </div>
  );
}
