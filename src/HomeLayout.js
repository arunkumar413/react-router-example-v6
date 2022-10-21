import React from "react";
import { Link, Outlet } from "react-router-dom";

export function Homelayout() {
  return (
    <div className="container">
      <div className="main-container">
        home layout
        <Outlet />
      </div>
    </div>
  );
}
