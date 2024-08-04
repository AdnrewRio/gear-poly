import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Avatar,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Grid,
  Select,
  MenuItem,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    product_name: "",
    price: "",
    soLuong: "",
    description: "",
    hien: true,
    categories_id: "",
  });
  const [categories, setCategories] = useState([]);
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8080/api/products/${id}`)
        .then((response) => {
          const product = response.data;
          setInitialValues({
            product_name: product.product_name || "",
            price: product.price || "",
            soLuong: product.soLuong || "",
            description: product.description || "",
            hien: product.hien || true,
            category: product.categories_id || "", // Ensure this matches the `name` used in `Select`
          });

          setImagePreview(product.image ? `/assets/img/${product.image}` : "");
        })
        .catch((error) => {
          console.error("Error fetching product data:", error);
        });
    }

    axios
      .get("http://localhost:8080/api/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, [id]);

  const handleFormSubmit = (values) => {
    const formattedValues = {
      ...values,
      price: parseFloat(values.price),
      soLuong: parseInt(values.soLuong, 10),
      hien: values.hien === "true",
      categories_id: values.category, // Ensure this matches the API's expected field
    };
  
    const apiCall = id
      ? axios.put(`http://localhost:8080/api/products/${id}`, formattedValues)
      : axios.post(`http://localhost:8080/api/products`, formattedValues);
  
    apiCall
      .then(() => {
        toast.success(id ? "Cập nhật sản phẩm thành công!" : "Thêm sản phẩm thành công!");
        setTimeout(() => {
          navigate("/admin/products");
        }, 1500);
      })
      .catch((error) => {
        console.error(id ? "Error updating product:" : "Error adding product:", error);
        toast.error(id ? "Cập nhật sản phẩm thất bại!" : "Thêm sản phẩm thất bại!");
      });
  };
  

  const handleImageClick = () => {
    document.getElementById("imageInput").click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      // Additional logic for uploading the image should be added here
    }
  };

  return (
    <Box p="2%" m="20px">
      <Typography variant="h4" mb="20px">
        {id ? "Chỉnh sửa sản phẩm" : "Thêm sản phẩm"}
      </Typography>

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={productSchema}
        enableReinitialize
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4} md={3}>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <input
                    id="imageInput"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                  <Avatar
                    src={imagePreview}
                    alt="Product"
                    sx={{
                      width: 100,
                      height: 100,
                      marginBottom: "8px",
                      cursor: "pointer",
                    }}
                    onClick={handleImageClick}
                  />
                  <Typography variant="body1" align="center">
                    Ấn để thay đổi
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={8} md={9}>
                <Box display="grid" gap="20px">
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Tên sản phẩm"
                    name="product_name"
                    value={values.product_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.product_name && !!errors.product_name}
                    helperText={touched.product_name && errors.product_name}
                  />

                  <TextField
                    fullWidth
                    variant="outlined"
                    type="number"
                    label="Giá"
                    name="price"
                    value={values.price}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.price && !!errors.price}
                    helperText={touched.price && errors.price}
                  />

                  <TextField
                    fullWidth
                    variant="outlined"
                    type="number"
                    label="Số lượng"
                    name="soLuong"
                    value={values.soLuong}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.soLuong && !!errors.soLuong}
                    helperText={touched.soLuong && errors.soLuong}
                  />

                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Mô tả"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.description && !!errors.description}
                    helperText={touched.description && errors.description}
                  />

                  <FormControl fullWidth>
                    <Select
                      value={values.category || ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="category"
                      displayEmpty
                      error={touched.category && !!errors.category}
                    >
                      <MenuItem value="" disabled>
                        Chọn loại sản phẩm
                      </MenuItem>
                      {categories.length > 0 ? (
                        categories.map((category) => (
                          <MenuItem key={category.id} value={category.id}>
                            {category.categories_name}
                          </MenuItem>
                        ))
                      ) : (
                        <MenuItem disabled>Không có loại sản phẩm nào</MenuItem>
                      )}
                    </Select>
                  </FormControl>

                  <FormControl component="fieldset" sx={{ mb: 2 }}>
                    <RadioGroup
                      row
                      name="hien"
                      value={values.hien}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="false"
                        control={<Radio />}
                        label="Ẩn"
                      />
                      <FormControlLabel
                        value="true"
                        control={<Radio />}
                        label="Hiện"
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                {id ? "Cập nhật sản phẩm" : "Thêm sản phẩm"}
              </Button>
              <Button
                color="secondary"
                variant="contained"
                onClick={() => navigate("/admin/products")}
                sx={{ ml: 2 }}
              >
                Trở về
              </Button>
            </Box>
          </form>
        )}
      </Formik>

      <ToastContainer />
    </Box>
  );
};

const productSchema = yup.object().shape({
  product_name: yup.string().required("Tên sản phẩm là bắt buộc"),
  price: yup
    .number()
    .required("Giá là bắt buộc")
    .positive("Giá phải là số dương"),
  soLuong: yup
    .number()
    .required("Số lượng là bắt buộc")
    .integer("Số lượng phải là số nguyên"),
  description: yup.string(),
  hien: yup.boolean().required("Trạng thái là bắt buộc"),
  category: yup.string().required("Danh mục là bắt buộc"),
});

export default ProductForm;
