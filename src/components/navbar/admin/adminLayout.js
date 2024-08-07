import React from "react";
import AdminNavbar from "./index";
import "../../../css/footerAdmin.css";
import { Outlet } from "react-router-dom";
import FooterAdmin from "../../footer/admin";

const AdminLayout = () => {
  return (
    <div className="app-container">
      <AdminNavbar />
      <div style={{ marginTop: 70 }}>
        <main className="content">
          <Outlet />
        </main>
      </div>
      <FooterAdmin />
    </div>
  );
};

export default AdminLayout;
