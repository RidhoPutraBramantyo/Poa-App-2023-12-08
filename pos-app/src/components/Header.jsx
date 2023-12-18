import React from "react";
import "./Header.css"; // Asumsikan Anda memiliki file CSS terpisah untuk styling

const Header = () => {
  return (
    <header className="header">
      <div className="search-container">
        <input type="text" placeholder="Search document or product" />
      </div>
      <div className="user-profile">
        <div className="user-image">
          {/* Anda bisa menggunakan gambar profil dari pengguna yang login */}
          <img src="/path-to-user-image.jpg" alt="User" />
        </div>
        <div className="user-info">
          <div className="user-name">Max Thompson</div>
          <div className="user-role">Admin</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
