import React from "react";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import "../css/Sidebar.css";

const CustomNavLink = ({ to, children }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <NavLink
      to={to}
      className={match ? "sidebar-button active" : "sidebar-button"}
    >
      {children}
    </NavLink>
  );
};

const Sidebar = () => {
  return (
    <div className="d-flex flex-column align-items-start sidebar">
      <CustomNavLink to="/">
        <i className="bi bi-house-door-fill"></i> Dashboard
      </CustomNavLink>
      <CustomNavLink to="/product">
        <i className="bi bi-house-door-fill"></i> Product
      </CustomNavLink>
      <CustomNavLink to="/categories">
        <i className="bi bi-house-door-fill"></i> Categories
      </CustomNavLink>
      <CustomNavLink to="/inventory">
        <i className="bi bi-house-door-fill"></i> Inventory
      </CustomNavLink>
      <CustomNavLink to="/report">
        <i className="bi bi-house-door-fill"></i> Report
      </CustomNavLink>
      {/* Tambahkan lebih banyak CustomNavLink untuk item sidebar lainnya */}
    </div>
  );
};

export default Sidebar;
