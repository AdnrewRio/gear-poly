import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  Grid,
  Select,
  MenuItem,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
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
    hien: "true", // Khởi tạo giá trị boolean dưới dạng chuỗi
    categories_id: "",
  });
  const [categories, setCategories] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [imagesToDelete, setImagesToDelete] = useState([]);

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
            hien: product.hien === 0 ? "true" : "false", // Chuyển đổi từ số thành chuỗi boolean
            categories_id: product.categories_id || "",
          });

          setImagePreviews(
            product.imageEntity
              ? product.imageEntity.map(
                  (img) => ({
                    url: `http://localhost:8080/images/${img.name}`,
                    id: img.id,
                  })
                )
              : []
          );
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

  const handleFormSubmit = async (values) => {
    const formattedValues = {
      ...values,
      price: parseFloat(values.price),
      soLuong: parseInt(values.soLuong, 10),
      hien: values.hien === "true" ? 0 : 1, // Chuyển đổi từ chuỗi boolean thành số
      categories_id: values.categories_id,
    };

    const data = new FormData();
    data.append("product_name", formattedValues.product_name);
    data.append("price", formattedValues.price);
    data.append("soLuong", formattedValues.soLuong);
    data.append("description", formattedValues.description);
    data.append("hien", formattedValues.hien); // Gửi giá trị hien dưới dạng số
    data.append("categories_id", formattedValues.categories_id);

    if (imageFiles.length > 0) {
      imageFiles.forEach((file) => {
        data.append("images", file);
      });
    }

    try {
      const apiCall = id
        ? axios.put(`http://localhost:8080/api/products/${id}`, data)
        : axios.post(`http://localhost:8080/api/products`, data);
      const response = await apiCall;
      toast.success(
        id ? "Cập nhật sản phẩm thành công!" : "Thêm sản phẩm thành công!"
      );
      setTimeout(() => {
        navigate("/admin/products");
      }, 1500);
    } catch (error) {
      console.error(
        id ? "Error updating product:" : "Error adding product:",
        error
      );
      toast.error(
        id ? "Cập nhật sản phẩm thất bại!" : "Thêm sản phẩm thất bại!"
      );
    }
  };

  const handleImageClick = () => {
    document.getElementById("imageInput").click();
  };

  const handleImageChange = (event) => {
    const newFiles = Array.from(event.target.files);

    setImageFiles((prevFiles) => [...prevFiles, ...newFiles]);

    setImagePreviews((prevPreviews) => [
      ...prevPreviews,
      ...newFiles.map((file) => ({
        url: URL.createObjectURL(file),
        id: Date.now(), // Temporary ID for client-side only
      })),
    ]);
  };

  const handleImageDelete = async (index) => {
    const imageToDelete = imagePreviews[index];
    
    if (imageToDelete.id) {
      try {
        await axios.delete(`http://localhost:8080/api/products/images/${imageToDelete.id}`);
        setImagePreviews((prevPreviews) =>
          prevPreviews.filter((_, i) => i !== index)
        );
      } catch (error) {
        console.error("Error deleting image:", error);
      }
    }
  };

  return (
    <Box p="2%" m="20px" maxWidth="800px" mx="auto">
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
                    name="images"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                    multiple
                  />
                  <Box display="flex" flexWrap="wrap" gap="10px">
                    {imagePreviews.map((preview, index) => (
                      <Box
                        key={index}
                        position="relative"
                        width={100}
                        height={100}
                      >
                        <Box
                          component="img"
                          src={preview.url}
                          alt={`Product ${index}`}
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            marginBottom: "8px",
                            cursor: "pointer",
                          }}
                          onClick={handleImageClick}
                        />
                        <IconButton
                          onClick={() => handleImageDelete(index)}
                          sx={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            backgroundColor: "rgba(255, 255, 255, 0.8)",
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    ))}
                    <Button variant="contained" onClick={handleImageClick}>
                      Thêm ảnh
                    </Button>
                  </Box>
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
                  />

                  <FormControl fullWidth>
                    <Select
                      value={values.categories_id || ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="categories_id"
                      displayEmpty
                      inputProps={{ "aria-label": "Select Category" }}
                    >
                      <MenuItem value="" disabled>
                        Chọn danh mục
                      </MenuItem>
                      {categories.map((category) => (
                        <MenuItem key={category.id} value={category.id}>
                          {category.categories_name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl fullWidth>
                    <RadioGroup
                      name="hien"
                      value={values.hien}
                      onChange={handleChange}
                    >
                      <FormControlLabel value="true" control={<Radio />} label="Hiện" />
                      <FormControlLabel value="false" control={<Radio />} label="Ẩn" />
                    </RadioGroup>
                  </FormControl>

                  <Button type="submit" variant="contained" color="primary">
                    {id ? "Cập nhật" : "Thêm"}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
      <ToastContainer />
    </Box>
  );
};

const productSchema = yup.object().shape({
  product_name: yup.string().required("Tên sản phẩm là bắt buộc"),
  price: yup.number().required("Giá là bắt buộc").positive("Giá phải là số dương"),
  soLuong: yup.number().required("Số lượng là bắt buộc").positive("Số lượng phải là số dương"),
  description: yup.string(),
});

export default ProductForm;
