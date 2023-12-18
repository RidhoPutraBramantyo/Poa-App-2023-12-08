import React from "react";
import { NavLink, useLocation, Routes, Route } from "react-router-dom";
import SalesSummary from "./reportSub/SalesSummary"; // Import komponen SalesSummary
// import GrossProfit from "./reportSub/GrossProfit"; // Import komponen GrossProfit
// import PaymentMethods from "./reportSub/PaymentMethods"; // Import komponen PaymentMethods
// import ItemSales from "./reportSub/ItemSales"; // Import komponen ItemSales
// import CategorySales from "./reportSub/CategorySales"; // Import komponen CategorySales
import "./Report.css";

const Report = () => {
  const location = useLocation();

  return (
    <div className="report">
      <div className="report-navbar">
        <NavLink
          to="/report/salesSummary" // Path untuk menavigasi ke SalesSummary
          className={`sidebar-item ${
            location.pathname === "/report/salesSummary" ? "active" : ""
          }`}
        >
          Sales Summary
        </NavLink>
        {/* <NavLink
          to="/report/grossProfit" // Path untuk menavigasi ke GrossProfit
          className={`sidebar-item ${
            location.pathname === "/report/grossProfit" ? "active" : ""
          }`}
        >
          Gross Profit
        </NavLink>
        <NavLink
          to="/report/paymentMethods" // Path untuk menavigasi ke PaymentMethods
          className={`sidebar-item ${
            location.pathname === "/report/paymentMethods" ? "active" : ""
          }`}
        >
          Payment Methods
        </NavLink>
        <NavLink
          to="/report/itemSales" // Path untuk menavigasi ke ItemSales
          className={`sidebar-item ${
            location.pathname === "/report/itemSales" ? "active" : ""
          }`}
        >
          Item Sales
        </NavLink>
        <NavLink
          to="/report/categorySales" // Path untuk menavigasi ke CategorySales
          className={`sidebar-item ${
            location.pathname === "/report/categorySales" ? "active" : ""
          }`}
        >
          Category Sales
        </NavLink> */}
        {/* Tambahkan NavLink lainnya sesuai kebutuhan Anda */}
      </div>
      <div className="report-content">
        <Routes>
          <Route path="/report/salesSummary" element={<SalesSummary />} />
          {/* <Route path="/report/grossProfit" element={<GrossProfit />} />
          <Route path="/report/paymentMethods" element={<PaymentMethods />} />
          <Route path="/report/itemSales" element={<ItemSales />} />
          <Route path="/report/categorySales" element={<CategorySales />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default Report;
