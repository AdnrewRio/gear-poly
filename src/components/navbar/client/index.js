import React from "react";
import GearPoly from "../../../images/LogoGearPoly.png";
import { AiOutlineBell } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineSearch } from "react-icons/ai";
import Dropdown from 'react-bootstrap/Dropdown';
const NavbarClient = () => {
  return (
    <div>
      <nav className="navbar fixed-top p-0">
        <div className="container-fluid bg-white">
          <a className="navbar-brand" href="/index">
            <img
              id="profileImage"
              src={GearPoly}
              alt="Profile"
              className="rounded-circle"
              style={{ height: "110px", width: "110px", marginTop: "5px" }}
            />
          </a>
          <div className="d-flex align-items-center m-3">
            <input
              name="product_name"
              className="form-control "
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: "500px" }}
            />
            <button type="submit" className="btn btn-outline-dark  m-1">
              <i>
                <AiOutlineSearch />
              </i>
            </button>
            <button className="btn btn-outline-dark  m-1" type="submit">
              <i>
                <AiOutlineBell />
              </i>
            </button>
            <a href="/cart" className="btn btn-outline-dark  m-1">
              <i>
                <CiShoppingCart />
              </i>
            </a>
            <a href="/user/nguoidung">
              <img
                id="profileImage"
                src="/images/profile.png"
                alt="Profile"
                className="rounded-circle"
                style={{ height: "35px", width: "35px", marginTop: "5px" }}
              />
            </a>
          </div>
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ height: "35px", width: "205px", marginTop: "5px" }}>
        Tài khoản
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Đăng nhập</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Đăng ký</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>
      </nav>
    </div>
  );
};
export default NavbarClient;
