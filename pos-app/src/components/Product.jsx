import React, { useState, useEffect } from "react";
import "./Product.css"; // Pastikan Anda memiliki CSS yang sesuai

const Product = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    // Memuat data produk palsu dari file JSON
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        process.env.PUBLIC_URL + "/fakeProducts.json"
      ); // Mengambil file dari folder public
      if (!response.ok) {
        throw new Error("Failed to load data");
      }
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  const handleFilterChange = (category) => {
    setFilter(category);
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="product-container">
      <div className="filters">
        <button onClick={() => handleFilterChange("All")}>All</button>
        <button onClick={() => handleFilterChange("Pizza")}>Pizza</button>
        <button onClick={() => handleFilterChange("Pasta")}>Pasta</button>
        {/* Tambahkan lebih banyak tombol filter sesuai dengan kategori Anda */}
      </div>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>
                <img src={product.image} alt={product.name} />
              </td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.status ? "Active" : "Inactive"}</td>
              <td>
                {/* Tambahkan tombol atau tindakan yang diperlukan di sini */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Tambahkan komponen pagination di sini jika diperlukan */}
    </div>
  );
};

export default Product;
