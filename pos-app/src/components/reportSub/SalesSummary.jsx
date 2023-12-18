import React from "react";
import "./SalesSummary.css"; // Pastikan file CSS sesuai dengan nama yang diimpor

const SalesSummary = () => {
  const data = {
    grossSales: "Rp. 8.999.900",
    discount: "(Rp. 89.990)",
    netSales: "Rp. 8.910.000",
    tax: "(Rp. 89100)",
    rounding: "-",
    totalCollected: "Rp. 8,019,000",
  };

  return (
    <div className="sales-summary-container">
      <div className="summary-item">
        <span className="summary-label">Gross Sales</span>
        <span className="summary-value">{data.grossSales}</span>
      </div>
      <div className="summary-item">
        <span className="summary-label">Discount</span>
        <span className="summary-value">{data.discount}</span>
      </div>
      <div className="summary-item">
        <span className="summary-label">Net Sales</span>
        <span className="summary-value">{data.netSales}</span>
      </div>
      <div className="summary-item">
        <span className="summary-label">Tax</span>
        <span className="summary-value">{data.tax}</span>
      </div>
      <div className="summary-item">
        <span className="summary-label">Rounding</span>
        <span className="summary-value">{data.rounding}</span>
      </div>
      <div className="summary-item">
        <span className="summary-label">Total Collected</span>
        <span className="summary-value">{data.totalCollected}</span>
      </div>
    </div>
  );
};

export default SalesSummary;
