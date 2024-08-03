import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("-1");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productResponse, categoryResponse] = await Promise.all([
          axios.get("http://localhost:8080/api/products"),
          axios.get("http://localhost:8080/api/categories"),
        ]);
    
        console.log("Products:", productResponse.data); // Xem dữ liệu sản phẩm
        console.log("Categories:", categoryResponse.data); // Xem dữ liệu danh mục
    
        const dataWithProducts = productResponse.data.map((product) => ({
          id: product.id,
          product_name: product.product_name,
          price: product.price,
          soLuong: product.soLuong,
          description: product.description,
          hien: product.hien,
          ImgURL: product.image,
          categories_id: product.categories_id
        }));
        setProducts(dataWithProducts);
        setCategories(categoryResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleEditClick = (id) => {
    navigate(`/admin/productsForm/${id}`);
  };

  const handleAddClick = () => {
    navigate("/admin/productsForm");
  };

  const handleFormChange = (e) => {
    const { name, value, type, files } = e.target;
    setProducts({
      ...products,
      [name]: type === "file" ? files : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const updateStatus = (id, status) => {
    axios.put(`http://localhost:8080/api/products/${id}`, { hien: status ? 0 : 1 })
      .then((response) => {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === id ? { ...product, hien: status ? 0 : 1 } : product
          )
        );
      })
      .catch((error) => {
        console.error("Error updating status:", error);
      });
  };

  const getCategoryName = (categoryId) => {
    console.log("Looking for categoryId:", categoryId); // Debugging line
    const category = categories.find((cat) => cat.id === categoryId);
    console.log("Found category:", category); // Debugging line
    return category ? category.categories_name : "Không tìm thấy";
  };

  return (
    <main className="container mt-5">
      <div className="row">
        <div className="col-md-7 mb-4">
          <form className="d-flex mb-4" action="/searchProd" method="get">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Tìm kiếm theo tên"
              name="product_name"
            />
            <input
              className="form-control me-2"
              type="number"
              placeholder="Giá thấp nhất"
              name="minPrice"
              min="0"
            />
            <input
              className="form-control me-2"
              type="number"
              placeholder="Giá cao nhất"
              name="maxPrice"
              min="0"
            />
            <button className="btn btn-outline-success" type="submit">
              Tìm
            </button>
          </form>
          <div className="mb-3">
            <a className="btn btn-success me-2" href={`/admin/productsForm`}>
              Thêm sản phẩm mới
            </a>
            <a className="btn btn-primary me-2" href="/products-hidden">
              Sản phẩm ẩn
            </a>
            <a className="btn btn-primary me-2" href="/products-visible">
              Sản phẩm hiện
            </a>
            <br />
            <br />
            <form action="/search-by-category" method="get" className="d-inline">
              <select
                className="form-select"
                name="categories_id"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="-1">Tìm theo danh mục</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.categories_name}
                  </option>
                ))}
              </select>
            </form>
          </div>
          <div className="table-responsive">
            <table className="table table-hover table-sm">
              <thead>
                <tr>
                  <th>Mã</th>
                  <th>Tên</th>
                  <th>Giá</th>
                  <th>Số Lượng</th>
                  <th>Danh mục</th>
                  <th>Hình Ảnh</th>
                  <th>Mô Tả</th>
                  <th>Ẩn SP</th>
                  <th>Ac</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.product_name}</td>
                    <td>
                      {item.price.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </td>
                    <td>{item.soLuong}</td>
                    <td>{getCategoryName(item.categories_id)}</td>
                    <td>
                      <div style={{ position: "relative", width: "100px", height: "100px" }}>
                        <img
                          className="image"
                          src={`/assets/img/${item.ImgURL}`}
                          alt="Hình ảnh sản phẩm"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-info"
                        data-bs-toggle="modal"
                        data-bs-target={`#descriptionModal${item.id}`}
                      >
                        Xem mô tả
                      </button>
                      <div
                        className="modal fade"
                        id={`descriptionModal${item.id}`}
                        tabIndex="-1"
                        aria-labelledby={`descriptionModalLabel${item.id}`}
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id={`descriptionModalLabel${item.id}`}
                              >
                                Mô tả sản phẩm
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              {item.description ||
                                "Không có mô tả cho sản phẩm này"}
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Đóng
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={item.hien}
                        onChange={() => updateStatus(item.id, !item.hien)}
                      />
                    </td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href={`/admin/productsForm/${item.id}`}
                      >
                        Chỉnh
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li
                className={`page-item ${currentPage === 0 ? "disabled" : ""}`}
              >
                <a
                  className="page-link"
                  href="#"
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Previous
                </a>
              </li>
              {[...Array(totalPages).keys()].map((i) => (
                <li
                  key={i}
                  className={`page-item ${i === currentPage ? "active" : ""}`}
                >
                  <a
                    className="page-link"
                    href="#"
                    onClick={() => setCurrentPage(i)}
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
                  href="#"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
};

export default Product;
