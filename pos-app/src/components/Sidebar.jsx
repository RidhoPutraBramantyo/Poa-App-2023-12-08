import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Sidebar.css"; // Pastikan Anda mengimpor CSS yang sesuai

const Sidebar = () => {
  return (
    <div className="d-flex flex-column align-items-start sidebar">
      <NavLink to="/" activeClassName="active" className="sidebar-button">
        <i className="bi bi-house-door-fill"></i>{" "}
        {/* Ganti dengan ikon yang sesuai */}
        Dashboard
      </NavLink>{" "}
      <NavLink to="/" activeClassName="active" className="sidebar-button">
        <i className="bi bi-house-door-fill"></i> Product
      </NavLink>{" "}
      <NavLink to="/" activeClassName="active" className="sidebar-button">
        <i className="bi bi-house-door-fill"></i>{" "}
        {/* Ganti dengan ikon yang sesuai */}
        Categories
      </NavLink>{" "}
      <NavLink to="/" activeClassName="active" className="sidebar-button">
        <i className="bi bi-house-door-fill"></i>{" "}
        {/* Ganti dengan ikon yang sesuai */}
        Inventory
      </NavLink>{" "}
      <NavLink to="/" activeClassName="active" className="sidebar-button">
        <i className="bi bi-house-door-fill"></i>{" "}
        {/* Ganti dengan ikon yang sesuai */}
        Report
      </NavLink>
      {/* Tambahkan lebih banyak NavLink untuk item sidebar lainnya */}
    </div>
  );
};

export default Sidebar;
