import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Sidebar.css"; // Pastikan Anda mengimpor file CSS yang benar

const SidebarButton = ({ to, label }) => {
  return (
    <NavLink to={to} className="sidebar-button">
      {/* Jika menggunakan ikon, impor dan tambahkan di sini */}
      {label}
    </NavLink>
  );
};

// Gunakan komponen SidebarButton ini untuk setiap item di sidebar Anda.
