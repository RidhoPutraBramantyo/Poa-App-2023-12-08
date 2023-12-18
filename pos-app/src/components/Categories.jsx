import React from "react";
import "./Categories.css";

const Categories = () => {
  const categories = [
    { name: "Appetizer", totalProduct: "9 Pcs", status: "Active" },
    // Tambahkan kategori lainnya
  ];

  return (
    <div className="category">
      <input type="text" placeholder="Search categories" />
      <button className="add-category">+ Category</button>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Category Name</th>
            <th>Total Product</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{category.name}</td>
              <td>{category.totalProduct}</td>
              <td>{category.status}</td>
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

export default Categories;
