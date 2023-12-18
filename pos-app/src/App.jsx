import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Product from "./components/Product.jsx";
import Report from "./components/Report.jsx";
import AdminPage from "./pages/AdminPage.jsx"; // Impor komponen AdminPage
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="app-body">
          <Sidebar />
          <div className="app-content">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/product" element={<Product />} />
              <Route path="/report" element={<Report />} />
              <Route path="/admin" element={<AdminPage />} />{" "}
              {/* Tambahkan rute untuk AdminPage */}
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
