import { useState } from "react";
import "./Dashboard.css";

const products = [
  {
    id: 1,
    name: "Dragon Figure",
    category: "Figures",
    stock: 12,
    price: 25,
    status: "In stock",
  },
  {
    id: 2,
    name: "Phone Stand",
    category: "Utility",
    stock: 3,
    price: 15,
    status: "Low Stock",
  },
  {
    id: 3,
    name: "Decorative Vase",
    category: "Home",
    stock: 0,
    price: 30,
    status: "Out of Stock",
  },
  {
    id: 4,
    name: "Cable Holder",
    category: "Utility",
    stock: 24,
    price: 8,
    status: "In Stock",
  },
  {
    id: 5,
    name: "Mini Planter",
    category: "Home",
    stock: 7,
    price: 12,
    status: "In Stock",
  },
];

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 5;
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "" || product.category === selectedCategory;

    const matchesStatus =
      selectedStatus === "" || product.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });
  const totalPages = Math.ceil(filteredProducts.length / pageSize);

  const startIndex = (currentPage - 1) * pageSize;

  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + pageSize
  );

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Overview of your inventory</p>
        </div>
      </header>

      <section className="dashboard-stats">
        <div className="stat-card">
          <span className="stat-label">Total Products</span>
          <strong className="stat-value">128</strong>
        </div>

        <div className="stat-card">
          <span className="stat-label">Low Stock</span>
          <strong className="stat-value">7</strong>
        </div>

        <div className="stat-card">
          <span className="stat-label">Out of Stock</span>
          <strong className="stat-value">3</strong>
        </div>
      </section>

      <section className="inventory-section">
        <div className="inventory-header">
          <div>
            <h2>Inventory</h2>
          </div>
          <button type="button">+ Add Product</button>
          <div className="inventory-toolbar">
            <input
              type="search"
              placeholder="Search products..."
              aria-label="Search products"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />

            <select
              aria-label="Filter by category"
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Figures">Figures</option>
              <option value="Utility">Utility</option>
              <option value="Home">Home</option>
            </select>

            <select
              aria-label="Filter by status"
              value={selectedStatus}
              onChange={(event) => setSelectedStatus(event.target.value)}
            >
              <option value="">All Statuses</option>
              <option value="In Stock">In Stock</option>
              <option value="Low Stock">Low Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
        </div>

        <div className="inventory-table">
          <div className="inventory-row inventory-table-header">
            <span>
              <input type="checkbox" aria-label="Select all products" />
            </span>
            <span>Product</span>
            <span>Category</span>
            <span>Stock</span>
            <span>Price</span>
            <span>Status</span>
            <span>Actions</span>
          </div>

          {paginatedProducts.map((product) => (
            <div className="inventory-row" key={product.id}>
              <span>
                <input type="checkbox" aria-label={`Select ${product.name}`} />
              </span>

              <span>{product.name}</span>
              <span>{product.category}</span>
              <span>{product.stock}</span>
              <span>${product.price.toFixed(2)}</span>
              <span>{product.status}</span>

              <span>
                <button
                  type="button"
                  aria-label={`Actions for ${product.name}`}
                >
                  ⋮
                </button>
              </span>
            </div>
          ))}
        </div>

        <div className="pagination">
          <span>
            Showing {filteredProducts.length === 0 ? 0 : startIndex + 1}
            {"–"}
            {Math.min(startIndex + pageSize, filteredProducts.length)}
            {" of "}
            {filteredProducts.length} products
          </span>

          <div className="pagination-controls">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((page) => page - 1)}
            >
              ←
            </button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  type="button"
                  className={currentPage === page ? "active" : ""}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              )
            )}
            <button
              type="button"
              disabled={currentPage === totalPages || totalPages === 0}
              onClick={() => setCurrentPage((page) => page + 1)}
            >
              →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
