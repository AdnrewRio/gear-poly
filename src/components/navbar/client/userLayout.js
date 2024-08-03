import React from "react";
import NavbarClient from "./index";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      <NavbarClient />
      <div style={{ marginTop: 100 }}>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
