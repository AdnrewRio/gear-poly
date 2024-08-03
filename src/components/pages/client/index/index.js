<<<<<<< HEAD
import React from "react";
=======
import React from "react";  
>>>>>>> eeaf03624a3408033b9cbad4af9586fea923a90e

const Index = ({
  categories = [],
  products = [],
  currentPage = 0,
  totalPages = 1,
}) => {
  return (
    <div>
      <nav className="navbar fixed-top p-0">
        <div className="container-fluid bg-danger">
          <a className="navbar-brand" href="/index">
            GearPoly
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
            <button
              type="submit"
              className="btn btn-outline-light text-dark m-1"
            >
              abc
            </button>
            <button
              className="btn btn-outline-light text-dark m-1"
              type="submit"
            >
              abc<i class="fa-regular fa-bell"></i>
            </button>
            <button
              className="btn btn-outline-light text-dark m-1"
              type="submit"
            >
              abc <i className="fa-solid fa-circle-up"></i>
            </button>
            <a href="/cart" className="btn btn-outline-light text-dark m-1">
              giỏ hàng <i className="fa-solid fa-cart-shopping"></i>
            </a>
            <a href="/ttnguoidung">
              <img
                id="profileImage"
                src="/images/profile.png"
                alt="Profile"
                className="rounded-circle"
                style={{ height: "35px", width: "35px", marginTop: "5px" }}
              />
            </a>
          </div>
          <div>
            <button
              className="navbar-toggler bg-light"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  GearPoly
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/user/index"
                    >
                      <i className="fa-solid fa-house m-1"></i>Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link g-black" href="#">
                      <i className="fa-solid fa-heart m-1"></i> My favorites
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-bars m-1"></i> My account
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="/login">
                          <i className="fa-solid fa-right-to-bracket m-1"></i>{" "}
                          Login
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/user/quenmatkhau">
                          <i className="fa-solid fa-question m-1"></i> Forgot
                          Password
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/register">
                          <i className="fa-solid fa-registered m-1"></i>{" "}
                          Registration
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/logout">
                          <i className="fa-solid fa-outdent m-1"></i> Logoff
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/changePassword">
                          <i className="fa-solid fa-gears m-1"></i> Change
                          Password
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/user/nguoidung">
                          <i className="fa-solid fa-gears m-1"></i> Edit Profile
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className=" pt-5">
        <div id="carouselExampleIndicators" className="carousel slide mt-3">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <img
<<<<<<< HEAD
=======
                
>>>>>>> eeaf03624a3408033b9cbad4af9586fea923a90e
                className="d-block w-100"
                alt="Slide 1"
                width="600px"
                height="300px"
              />
            </div>
            <div className="carousel-item">
              <img
                src="../images/banner2.png"
                className="d-block w-100"
                alt="Slide 2"
                width="600px"
                height="300px"
              />
            </div>
            <div className="carousel-item ">
              <img
                src="../images/banner3.png"
                className="d-block w-100"
                alt="Slide 3"
                width="600px"
                height="300px"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <form
          className="d-flex ms-auto"
          action="/searchMinMaxIndex"
          method="get"
        >
          <div className="d-flex m-4 align-items-center">
            <select
              className="form-control me-2"
              name="minPrice"
              style={{ width: "170px" }}
            >
              <option value="" disabled selected>
                Giá thấp nhất
              </option>
              <option value="500000">500,000</option>
              <option value="1000000">1,000,000</option>
              <option value="2000000">2,000,000</option>
              <option value="3000000">3,000,000</option>
              <option value="4000000">4,000,000</option>
              <option value="5000000">5,000,000</option>
            </select>
            <select
              className="form-control me-2"
              name="maxPrice"
              style={{ width: "170px" }}
            >
              <option value="" disabled selected>
                Giá cao nhất
              </option>
              <option value="5000000">5,000,000</option>
              <option value="10000000">10,000,000</option>
              <option value="15000000">15,000,000</option>
              <option value="20000000">20,000,000</option>
              <option value="25000000">25,000,000</option>
              <option value="30000000">30,000,000</option>
            </select>
            <select
              className="rounded me-2"
              style={{ width: "190px", height: "37px" }}
              name="categories_id"
              onChange={(e) => e.target.form.submit()}
            >
              <option selected value="-1">
                Tìm theo danh mục
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.categories_name}
                </option>
              ))}
            </select>
            <button className="btn btn-outline-success" type="submit">
              Tìm
            </button>
          </div>
        </form>

        <div className="container">
          <div className="row">
            <div className="card m-3" style={{ width: "18rem" }}>
              <img  className="card-img-top" alt="Example" />
              <div className="card-body">
                <h5 className="card-title">Sản phẩm 1</h5>
                <p className="card-text">Mô tả sản phẩm</p>
                <a href="/ProductDetail" className="btn btn-primary">
                  Mua
                </a>
              </div>
            </div>

            <div className="card m-3" style={{ width: "18rem" }}>
              <img  className="card-img-top" alt="Example" />
              <div className="card-body">
                <h5 className="card-title">Sản phẩm 2</h5>
                <p className="card-text">Mô tả sản phẩm</p>
                <a href="#" className="btn btn-primary">
                  Mua
                </a>
              </div>
            </div>

            <div className="card m-3" style={{ width: "18rem" }}>
              <img  className="card-img-top" alt="Example" />
              <div className="card-body">
                <h5 className="card-title">Sản phẩm 3</h5>
                <p className="card-text">Mô tả sản phẩm</p>
                <a href="#" className="btn btn-primary">
                  Mua
                </a>
              </div>
            </div>

            <div className="card m-3" style={{ width: "18rem" }}>
              <img  className="card-img-top" alt="Example" />
              <div className="card-body">
                <h5 className="card-title">Sản phẩm 4</h5>
                <p className="card-text">Mô tả sản phẩm</p>
                <a href="#" className="btn btn-primary">
                  Mua
                </a>
              </div>
            </div>
          </div>

          <div className="row mt-2">
            <div className="card m-3" style={{ width: "18rem" }}>
              <img  className="card-img-top" alt="Example" />
              <div className="card-body">
                <h5 className="card-title">Sản phẩm 5</h5>
                <p className="card-text">Mô tả sản phẩm</p>
                <a href="#" className="btn btn-primary">
                  Mua
                </a>
              </div>
            </div>

            <div className="card m-3" style={{ width: "18rem" }}>
              <img  className="card-img-top" alt="Example" />
              <div className="card-body">
                <h5 className="card-title">Sản phẩm 6</h5>
                <p className="card-text">Mô tả sản phẩm</p>
                <a href="#" className="btn btn-primary">
                  Mua
                </a>
              </div>
            </div>

            <div className="card m-3" style={{ width: "18rem" }}>
              <img  className="card-img-top" alt="Example" />
              <div className="card-body">
                <h5 className="card-title">Sản phẩm 7</h5>
                <p className="card-text">Mô tả sản phẩm</p>
                <a href="#" className="btn btn-primary">
                  Mua
                </a>
              </div>
            </div>

            <div className="card m-3" style={{ width: "18rem" }}>
              <img  className="card-img-top" alt="Example" />
              <div className="card-body">
                <h5 className="card-title">Sản phẩm 8</h5>
                <p className="card-text">Mô tả sản phẩm</p>
                <a href="#" className="btn btn-primary">
                  Mua
                </a>
              </div>
            </div>
          </div>

          {/* {products.length === 0 ? (
            <p>Không tìm thấy sản phẩm nào.</p>
          ) : (
            <div className="row">
              {products.map((product) => (
                <div key={product.id} className="col-4">
                  <div className="card mt-5 border border-dark-subtle" style={{ width: "18rem" }}>
                    <a href={`/user/chitiet?id=${product.id}`}>
                      <div style={{ position: "relative", width: "286px", height: "200px" }}>
                        {product.imageEntities.map((image, index) => (
                          <img
                            key={index}
                            className="rounded mx-auto d-block"
                            src={`/images/${image.name}`}
                            alt={product.product_name}
                            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                          />
                        ))}
                      </div>
                    </a>
                    <div className="card-body">
                      <h6 className="card-title">{product.product_name}</h6>
                      <p className="card-text bg-secondary-subtle">
                        {product.categoryEntity[0].categories_name}
                      </p>
                      <p className="text-danger">
                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                      </p>
                      <h6 className="text-warning">
                        0.0 <i className="fa-solid fa-star"></i>
                      </h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )} */}
          <div className="row mt-2">
            <div className="col-5"></div>
            <div className="col-2">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li
                    className={`page-item ${
                      currentPage === 0 ? "disabled" : ""
                    }`}
                  >
                    <a
                      className="page-link"
                      href={`/user/index?page=${
                        currentPage > 0 ? currentPage - 1 : 0
                      }&size=6`}
                    >
                      Previous
                    </a>
                  </li>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <li
                      key={i}
                      className={`page-item ${
                        i === currentPage ? "active" : ""
                      }`}
                    >
                      <a
                        className="page-link"
                        href={`/user/index?page={i}&size=6`}
                      >
                        {i + 1}
                      </a>
                    </li>
                  ))}
                  <li
                    className={`page-item ${
                      currentPage === totalPages - 1 ? "disabled" : ""
                    }`}
                  >
                    <a
                      className="page-link"
                      href={`/user/index?page=${
                        currentPage < totalPages - 1
                          ? currentPage + 1
                          : totalPages - 1
                      }&size=6`}
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-5"></div>
          </div>
        </div>
      </div>
      <footer className="bg-dark text-light py-4 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>Contact Us</h5>
              <p>Email: support@gearly.com</p>
              <p>Phone: +123 456 7890</p>
            </div>
            <div className="col-md-4">
              <h5>Follow Us</h5>
              <a href="#" className="text-light me-3">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <div className="col-md-4">
              <h5>About Us</h5>
              <p>
                GearPoly is a leading e-commerce platform providing a variety of
                products at competitive prices. Our mission is to deliver the
                best shopping experience for our customers.
              </p>
            </div>
          </div>
          <div className="text-center mt-3">
            <p>&copy; 2024 GearPoly. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
