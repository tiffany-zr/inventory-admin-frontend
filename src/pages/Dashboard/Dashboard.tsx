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
            />

            <select aria-label="Filter by category" defaultValue="">
              <option value="" disabled>
                Category
              </option>
              <option value="figures">Figures</option>
              <option value="utility">Utility</option>
              <option value="home">Home</option>
            </select>

            <select aria-label="Filter by status" defaultValue="">
              <option value="" disabled>
                Status
              </option>
              <option value="in-stock">In Stock</option>
              <option value="low-stock">Low Stock</option>
              <option value="out-of-stock">Out of Stock</option>
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

          {products.map((product) => (
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
          <span>Showing 1–5 of 128 products</span>

          <div className="pagination-controls">
            <button type="button" disabled>
              ←
            </button>

            <button type="button" className="active">
              1
            </button>

            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button">4</button>
            <button type="button">5</button>

            <button type="button">→</button>
          </div>
        </div>
      </section>
    </div>
  );
}
