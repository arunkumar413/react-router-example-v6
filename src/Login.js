import React from "react";
import { Link, Outlet } from "react-router-dom";

export function Login() {
  return (
    <div className="container">
      <div className="main-container">Login page.. without layout</div>
      <Link to="/">go main</Link>
    </div>
  );
}
