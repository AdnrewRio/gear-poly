import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [categoryForm, setCategoryForm] = useState({
    id: '',
    categories_name: '',
    file: null,
    image: null,
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [alert, setAlert] = useState({ message: '', alertClass: '' });
  const navigate = useNavigate();

  // Fetch data function
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/categories?page=${currentPage}`);
      setCategories(response.data);
      setTotalPages(response.headers['x-total-pages']);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data on initial load
  }, [currentPage]);

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    setCategoryForm({
      ...categoryForm,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('categories_name', categoryForm.categories_name);
    formData.append('file', categoryForm.file);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    try {
      if (categoryForm.id) {
        // Update category
        const response = await axios.put(`http://localhost:8080/api/categories/${categoryForm.id}`, formData, config);
        console.log('Updated category:', response.data);
        setAlert({
          message: 'Cập nhật danh mục thành công',
          alertClass: 'alert-success',
        });
      } else {
        // Add new category
        const response = await axios.post('http://localhost:8080/api/categories', formData, config);
        console.log('Added category:', response.data);
        setAlert({
          message: 'Thêm danh mục mới thành công',
          alertClass: 'alert-success',
        });
      }

      // Clear form after submission
      setCategoryForm({
        id: '',
        categories_name: '',
        file: null,
        image: null,
      });

      // Refresh categories list or update state as needed
      fetchData();
    } catch (error) {
      console.error('Error:', error);
      setAlert({
        message: 'Có lỗi xảy ra. Vui lòng thử lại sau.',
        alertClass: 'alert-danger',
      });
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic
    // This is placeholder, you need to define your own search logic
  };

  const handleEditCategory = (category) => {
    navigate('/admin/categoriesForm', { state: { category } });
  };

  return (
    <main className="container mt-5">
          {alert.message && (
            <div className={`alert ${alert.alertClass}`} role="alert">
              <span>{alert.message}</span>
            </div>
          )}
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel">
              <div className="container-fluid">
                <div>
                  <div className="row">
                    <div className="col">
                      <div className="row position-relative">
                        <div className="position-absolute top-0 start-50 end-50" style={{ marginLeft: '-25vh' }}>
                          <h2 className="nd">Quản Lý Danh Mục</h2>
                        </div>
                          
                    <div className="col">
                      <form className="d-flex ms-auto" onSubmit={handleSearch}>
                        <div className="d-flex">
                          <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Tìm kiếm"
                            name="categories_name"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                          <button className="btn btn-outline-success" type="submit">
                            Tìm
                          </button>
                        </div>
                      </form>
                      <table className="table mt-4 table-hover table-sm">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Tên Danh Mục</th>
                            <th>Hình Ảnh</th>
                            <th>Thao tác</th>
                          </tr>
                        </thead>
                        <tbody>
                          {categories.map((item) => (
                            <tr key={item.id}>
                              <td>{item.id}</td>
                              <td>{item.categories_name}</td>
                              <td>
                                {item.image && (
                                  <img
                                    src={`/images/${item.image}`}
                                    className="img-thumbnail me-3"
                                    alt="Product"
                                    style={{ width: '150px', height: '150px' }}
                                  />
                                )}
                              </td>
                              <td>
                                <button
                                  className="btn btn-2 btn-success"
                                  onClick={() => handleEditCategory(item)}
                                >
                                  Sửa
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <nav className="tohop" aria-label="Page navigation example">
                        <ul className="pagination">
                          <li className={`page-item ${currentPage === 0 ? 'disabled' : ''}`}>
                            <button
                              className="page-link"
                              onClick={() => setCurrentPage(currentPage - 1)}
                            >
                              Previous
                            </button>
                          </li>
                          {[...Array(totalPages).keys()].map((i) => (
                            <li key={i} className={`page-item ${i === currentPage ? 'active' : ''}`}>
                              <button
                                className="page-link"
                                onClick={() => setCurrentPage(i)}
                              >
                                {i + 1}
                              </button>
                            </li>
                          ))}
                          <li className={`page-item ${currentPage === totalPages - 1 ? 'disabled' : ''}`}>
                            <button
                              className="page-link"
                              onClick={() => setCurrentPage(currentPage + 1)}
                            >
                              Next
                            </button>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Categories;
