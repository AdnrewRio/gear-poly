import React from "react";
import image from "../../../../images/image.png";
import image1 from "../../../../images/sanpham1.webp";

import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";

const Index = ({
  categories = [],
  products = [],
  currentPage = 0,
  totalPages = 1,
}) => {
  return (
    <div className="bg-body-tertiary">
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
                src={image}
                className="d-block w-100"
                alt="Slide 1"
                width="600px"
                height="500px"
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

        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
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
              <h1>Sản phẩm nổi bật</h1>
              <div className="row">
                <div className="card m-3" style={{ width: "17rem" }}>
                  <center>
                    <img
                      src={image1}
                      className="card-img-top"
                      alt="Example"
                      style={{ width: "15rem", height: "15rem" }}
                    />
                  </center>
                  <div className="card-body">
                    <h5 className="card-title">Sản phẩm 1</h5>
                    <p className="card-text">Mô tả sản phẩm</p>
                    <a href="/ProductDetail" className="btn btn-primary">
                      Mua
                    </a>
                  </div>
                </div>
                <div className="card m-3" style={{ width: "17rem" }}>
                  <center>
                    <img
                      src={image1}
                      className="card-img-top"
                      alt="Example"
                      style={{ width: "15rem", height: "15rem" }}
                    />
                  </center>
                  <div className="card-body">
                    <h5 className="card-title">Sản phẩm 2</h5>
                    <p className="card-text">Mô tả sản phẩm</p>
                    <a href="#" className="btn btn-primary">
                      Mua
                    </a>
                  </div>
                </div>
                <div className="card m-3" style={{ width: "17rem" }}>
                  <center>
                    <img
                      src={image1}
                      className="card-img-top"
                      alt="Example"
                      style={{ width: "15rem", height: "15rem" }}
                    />
                  </center>
                  <div className="card-body">
                    <h5 className="card-title">Sản phẩm 3</h5>
                    <p className="card-text">Mô tả sản phẩm</p>
                    <a href="#" className="btn btn-primary">
                      Mua
                    </a>
                  </div>
                </div>
                <div className="card m-3" style={{ width: "17rem" }}>
                  <center>
                    <img
                      src={image1}
                      className="card-img-top"
                      alt="Example"
                      style={{ width: "15rem", height: "15rem" }}
                    />
                  </center>
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
                <div className="card m-3" style={{ width: "17rem" }}>
                  <center>
                    <img
                      src={image1}
                      className="card-img-top"
                      alt="Example"
                      style={{ width: "15rem", height: "15rem" }}
                    />
                  </center>
                  <div className="card-body">
                    <h5 className="card-title">Sản phẩm 5</h5>
                    <p className="card-text">Mô tả sản phẩm</p>
                    <a href="#" className="btn btn-primary">
                      Mua
                    </a>
                  </div>
                </div>
                <div className="card m-3" style={{ width: "17rem" }}>
                  <center>
                    <img
                      src={image1}
                      className="card-img-top"
                      alt="Example"
                      style={{ width: "15rem", height: "15rem" }}
                    />
                  </center>
                  <div className="card-body">
                    <h5 className="card-title">Sản phẩm 6</h5>
                    <p className="card-text">Mô tả sản phẩm</p>
                    <a href="#" className="btn btn-primary">
                      Mua
                    </a>
                  </div>
                </div>
                <div className="card m-3" style={{ width: "17rem" }}>
                  <center>
                    <img
                      src={image1}
                      className="card-img-top"
                      alt="Example"
                      style={{ width: "15rem", height: "15rem" }}
                    />
                  </center>
                  <div className="card-body">
                    <h5 className="card-title">Sản phẩm 7</h5>
                    <p className="card-text">Mô tả sản phẩm</p>
                    <a href="#" className="btn btn-primary">
                      Mua
                    </a>
                  </div>
                </div>
                <div className="card m-3" style={{ width: "17rem" }}>
                  <center>
                    <img
                      src={image1}
                      className="card-img-top"
                      alt="Example"
                      style={{ width: "15rem", height: "15rem" }}
                    />
                  </center>
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
                          <AiOutlineDoubleLeft />
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
                          <AiOutlineDoubleRight />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col-5"></div>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
