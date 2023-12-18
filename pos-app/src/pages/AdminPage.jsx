import React from "react";
import "./AdminPage.css";

const AdminPage = () => {
  const admins = [
    {
      name: "Abdur",
      role: "Admin",
      email: "abdur@example.com",
      phone: "08179921293",
      lastSeen: "Wed Apr 5, 12:00 PM",
      status: "Active",
    },
    // Tambahkan admin lainnya
  ];

  return (
    <div className="admin-page">
      <input type="text" placeholder="Search admin" />
      <button className="add-admin">+ Admin</button>
      <button>Download</button>
      <div className="filter-tabs">
        <button>All (5)</button>
        <button>Admin (2)</button>
        <button>Cashier (3)</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Last Seen</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{admin.name}</td>
              <td>{admin.role}</td>
              <td>{admin.email}</td>
              <td>{admin.phone}</td>
              <td>{admin.lastSeen}</td>
              <td>{admin.status}</td>
              <td>
                <button>Edit</button> | <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>5 Records found</div>
    </div>
  );
};

export default AdminPage;
