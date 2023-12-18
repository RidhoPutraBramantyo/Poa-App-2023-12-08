import React from "react";
import { NavLink, useLocation } from "react-router-dom"; // Menggunakan NavLink dan useLocation
import "./Sidebar.css";

const Sidebar = () => {
  // Menggunakan useLocation untuk mendapatkan informasi lokasi saat ini
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar-logo">PIZZA PIZZAZZ</div>
      <div className="sidebar-section">
        <p className="sidebar-section-title">MANAGE</p>
        <NavLink
          to="/dashboard"
          className={`sidebar-item ${
            location.pathname === "/dashboard" ? "active" : ""
          }`}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/product"
          className={`sidebar-item ${
            location.pathname === "/product" ? "active" : ""
          }`}
        >
          Product
        </NavLink>
        <NavLink
          to="/categories"
          className={`sidebar-item ${
            location.pathname === "/categories" ? "active" : ""
          }`}
        >
          Categories
        </NavLink>
        <NavLink
          to="/inventory"
          className={`sidebar-item ${
            location.pathname === "/inventory" ? "active" : ""
          }`}
        >
          Inventory
        </NavLink>
        <NavLink
          to="/report"
          className={`sidebar-item ${
            location.pathname === "/report" ? "active" : ""
          }`}
        >
          Report
        </NavLink>
      </div>
      <div className="sidebar-section">
        <p className="sidebar-section-title">PREFERENCE</p>
        <NavLink
          to="/admin"
          className={`sidebar-item ${
            location.pathname === "/admin" ? "active" : ""
          }`}
        >
          Admin Settings
        </NavLink>
        <NavLink
          to="/general"
          className={`sidebar-item ${
            location.pathname === "/general" ? "active" : ""
          }`}
        >
          General
        </NavLink>
        <NavLink
          to="/logout"
          className={`sidebar-item ${
            location.pathname === "/logout" ? "active" : ""
          }`}
        >
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
