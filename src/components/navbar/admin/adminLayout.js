import React from "react";
import AdminNavbar from "./index";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="app-container">
      <AdminNavbar />
      <div style={{ marginTop: 70 }}>
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
