import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Navigate } from "react-router-dom";

//client
import UserLayout from "./components/navbar/client/userLayout";
import Laphoadon from "./components/pages/client/bills/laphoadon";
import TTngdung from "./components/pages/client/user_info/plTTngdung";
import Chitiethoadon from "./components/pages/client/bill_details/chitiethoadon";
import Cart from "./components/pages/client/Cart/cart";
import ProductDetail from "./components/pages/client/ProductDetail/chitietsanpham";
import Login from "./components/pages/client/Login/login";
import Register from "./components/pages/client/Register/register";
import ChangePassword from "./components/pages/client/ChangePass/changepass";
import Index from "./components/pages/client/index";

//admin
import AdminLayout from "./components/navbar/admin/adminLayout";
import Kho from "./components/pages/Admin/warehouse/kho";
import Qluser from "./components/pages/Admin/users/qltkuser";
import ThongKeTongChiTieu from "./components/pages/Admin/statistics/totalnam";
import Product from "./components/pages/Admin/products/product";
<<<<<<< HEAD
import ProductFrom from "./components/pages/Admin/products/productForm";
import Categoties from "./components/pages/Admin/categories/categories";

function App() {
=======
import ProductForm from "./components/pages/Admin/products/productForm";
import Categoties from "./components/pages/Admin/categories/categories";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/*  */}
        <Route path="/" element={<div></div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/changepass" element={<ChangePassword />} />
        {/*  */}
        <Route path="/index" element={<Index />} />
        <Route path="/laphoadon" element={<Laphoadon />} />
        <Route path="/ttnguoidung" element={<TTngdung />} />
        <Route path="/chitiethoadon" element={<Chitiethoadon />} />
        <Route path="/kho" element={<Kho />} />
        <Route path="/quanlyuser" element={<Qluser />} />
        <Route path="/thongke" element={<ThongKeTongChiTieu />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/products" element={<Product />} />
        <Route path="/productForm" element={<ProductForm />} />
        <Route path="/productForm/:id" element={<ProductForm />} />
        <Route path="/categories" element={<Categoties />} />
      </Route>
    )
  );

>>>>>>> eeaf03624a3408033b9cbad4af9586fea923a90e
  return (
    <Router>
      <div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/user/home" />} />
            {/* user */}
            <Route path="/user" element={<UserLayout />}>
              <Route path="home" element={<Index />} />
              <Route path="cart" element={<Cart />} />
              <Route path="productDetail" element={<ProductDetail />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="changePassword" element={<ChangePassword />} />
              <Route path="bills" element={<Laphoadon />} />
              <Route path="billDetails" element={<Chitiethoadon />} />
              <Route path="userInfo" element={<TTngdung />} />
            </Route>
            {/* admin */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="home" element={<Qluser />} />
              <Route path="products" element={<Product />} />
              <Route path="productsForm" element={<ProductFrom />} />
              <Route path="productsForm/:id" element={<ProductFrom />} />
              <Route path="categories" element={<Categoties />} />
              <Route path="statistics" element={<ThongKeTongChiTieu />} />
              <Route path="wherehouse" element={<Kho />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
