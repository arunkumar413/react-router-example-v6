import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

export function HomeParams() {
  let { id } = useParams();
  return (
    <div className="container">
      <div className="main-container">home param {id}</div>
    </div>
  );
}
