import React from "react";
import { Link, Outlet } from "react-router-dom";

export function Home() {
  return (
    <div className="container">
      <div className="main-container">
        home content
        <Outlet />
      </div>
    </div>
  );
}
