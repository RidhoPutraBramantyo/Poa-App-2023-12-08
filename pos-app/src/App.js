// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./css/Sidebar.css";
import Dashboard from "./components/Dashboard";
const App = () => {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <nav className="">
            <Sidebar />
          </nav>
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* Tentukan Route untuk halaman lain di sini */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
