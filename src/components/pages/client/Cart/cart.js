import React, { useState } from "react";
import Image1 from "../../../../images/sanpham1.webp";

const Cart = ({ cartItems, total }) => {
  return (
    <div className="container mt-xxl-5">
      <form action="/cart" method="post">
        <div className="row">
          <h3>GIỎ HÀNG</h3>
          <div className="col-12">
            <div className="d-flex align-items-center mb-3">
              <img
                height="60px"
                width="60px"
                src={Image1}
                className="d-block"
                alt=""
              />
              <div className="flex-grow-1">
                <h5 className="card-title mb-1">Tên sản phẩm</h5>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <button
                    type="button"
                    className="btn btn-danger btn-sm me-1"
                    // onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="form-control form-control-sm text-center"
                    // value={item.quantity}
                    min="1"
                    style={{ width: "50px" }}
                    readOnly
                  />
                  <button
                    type="button"
                    className="btn btn-success btn-sm ms-1"
                    // onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <p className="mb-0 mx-3">20.000.00VN</p>
                <button
                  className="btn btn-danger"
                  // onClick={() => removeFromCart(item.id)}
                >
                  Xóa
                </button>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h5 className="fw-bold">Tổng cộng:</h5>
              <h5 className="text-danger fw-bold">20.000.00</h5>
            </div>

            <a href="/taohoadon" className="btn btn-danger w-100 mt-3">
              Đặt hàng
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Cart;
