import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CategoriesForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [categoryForm, setCategoryForm] = useState({
    id: '',
    categories_name: '',
    file: null,
    image: null,
  });
  const [alert, setAlert] = useState({ message: '', alertClass: '' });

  useEffect(() => {
    if (location.state && location.state.category) {
      setCategoryForm(location.state.category);
    }
  }, [location.state]);

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

      // Redirect to categories list or update state as needed
      navigate('/admin/categories');
    } catch (error) {
      console.error('Error:', error);
      setAlert({
        message: 'Có lỗi xảy ra. Vui lòng thử lại sau.',
        alertClass: 'alert-danger',
      });
    }
  };

  return (
    <main className="container mt-5">
      {alert.message && (
        <div className={`alert ${alert.alertClass}`} role="alert">
          <span>{alert.message}</span>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="categories_name" className="form-label">Tên Danh Mục</label>
          <input
            type="text"
            className="form-control"
            id="categories_name"
            name="categories_name"
            value={categoryForm.categories_name}
            onChange={handleFormChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="file" className="form-label">Hình Ảnh</label>
          <input
            type="file"
            className="form-control"
            id="file"
            name="file"
            onChange={handleFormChange}
          />
          {categoryForm.image && (
            <img
              src={`/img/${categoryForm.image}`}
              className="img-thumbnail mt-3"
              alt="Product"
              style={{ width: '150px', height: '150px' }}
            />
          )}
        </div>
        <button type="submit" className="btn btn-primary">Lưu</button>
      </form>
    </main>
  );
};

export default CategoriesForm;
