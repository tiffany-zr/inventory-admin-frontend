import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const navigationItems = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Inventory", path: "/inventory" },
  { label: "Categories", path: "/categories" },
  { label: "Settings", path: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <h2>Inventory Admin</h2>
      </div>
      <nav className="sidebar-nav" aria-label="Main navigation">
        {navigationItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-user">
          <span>Admin</span>
        </div>

        <button type="button">Logout</button>
      </div>
    </aside>
  );
}
