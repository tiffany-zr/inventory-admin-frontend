import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./AdminLayout.css";

export default function AdminLayout() {
  return (
    <div className="admin-layout">
      <Sidebar />
      <main className="admin-layout-content">
        <Outlet />
      </main>
    </div>
  );
}
