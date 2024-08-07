import React from "react";
import NavbarClient from "./index";
import UserFooter from "../../footer/client/index";
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
      <UserFooter />
    </div>
  );
};

export default UserLayout;
