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
import useMediaQuery from "@mui/material/useMediaQuery";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const checkoutSchema = yup.object().shape({
  product_name: yup.string().required("Vui lòng không bỏ trống!"),
  price: yup
    .number()
    .required("Vui lòng không bỏ trống!")
    .positive("Giá phải lớn hơn 0"),
  soLuong: yup
    .number()
    .required("Vui lòng không bỏ trống!")
    .min(1, "Số lượng phải lớn hơn 0"),
  description: yup.string().required("Vui lòng không bỏ trống!"),
  category_id: yup.string().required("Vui lòng không bỏ trống!"),
  image: yup.mixed().nullable(),
  hien: yup.string().oneOf(["0", "1"], "Trạng thái không hợp lệ"),
});

const Form = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(max-width:600px)");

  const [initialValues, setInitialValues] = useState({
    product_name: "",
    price: "",
    soLuong: "",
    description: "",
    hien: "0",
    category_id: "",
    image: "",
  });

  const [categories, setCategories] = useState([]);
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/categories`
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
        toast.error("Không thể tải loại sản phẩm!");
      }
    };

    const fetchProduct = async () => {
      if (id) {
        try {
          const response = await axios.get(
            `http://localhost:8080/api/products/${id}`
          );
          const product = response.data;
          if (product) {
            setInitialValues({
              product_name: product.product_name || "",
              price: product.price || "",
              soLuong: product.soLuong || "",
              description: product.description || "",
              hien: product.hien ? "0" : "1",
              category_id: product.category_id,
              image: product.image,
            });
            setImagePreview(
              product.image ? `/assets/img/${product.image}` : ""
            );
          }
        } catch (error) {
          console.error("Error fetching product:", error);
          toast.error("Không thể tải sản phẩm!");
        }
      }
    };

    fetchCategories();
    fetchProduct();
  }, [id]);

  const handleFormSubmit = async (values) => {
    try {
      const formattedValues = {
        ...values,
        hien: values.hien === "0" ? 0 : 1,
      };
  
      const formData = new FormData();
      formData.append("product_name", formattedValues.product_name);
      formData.append("price", formattedValues.price);
      formData.append("soLuong", formattedValues.soLuong);
      formData.append("description", formattedValues.description);
      formData.append("category_id", formattedValues.category_id);
      formData.append("hien", formattedValues.hien);
  
      if (values.image) {
        formData.append("image", values.image);  // Append only the image name
      }
  
      const apiCall = id
        ? axios.put(`http://localhost:8080/api/products/${id}`, formData)
        : axios.post(`http://localhost:8080/api/products`, formData);
  
      const response = await apiCall;
      console.log("API Response:", response);
      toast.success(id ? "Cập nhật sản phẩm thành công!" : "Thêm sản phẩm thành công!");
  
      if (formattedValues.hien === 0) {
        // Handle special conditions if needed
      } else {
        setTimeout(() => {
          navigate("/admin/products");
        }, 1500);
      }
    } catch (error) {
      console.error(id ? "Error updating product:" : "Error adding product:", error.response ? error.response.data : error.message);
      toast.error(id ? "Cập nhật sản phẩm thất bại!" : "Thêm sản phẩm thất bại!");
    }
  };
  
  

  // Optional: Custom function to handle special conditions like logout
  const logoutUser = () => {
    localStorage.removeItem("authToken"); // Example for token stored in localStorage
    sessionStorage.removeItem("authToken"); // Example for token stored in sessionStorage
    navigate("/login"); // Redirect to login page or another route as necessary
  };

  const handleImageClick = () => {
    document.getElementById("imageInput").click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setInitialValues((prevValues) => ({
        ...prevValues,
        image: file.name,  // Store only the file name
      }));
      setImagePreview(URL.createObjectURL(file));  // Keep the preview functionality if needed
    }
  };
  

  const buttonLabel = id ? "Cập nhật sản phẩm" : "Thêm sản phẩm";

  return (
    <Box p="2%" m="20px" sx={{ maxWidth: "800px", margin: "auto" }}>
      <Box mt="30px">
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
          enableReinitialize
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={3}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <input
                      id="imageInput"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      style={{ display: "none" }}
                    />
                    <Avatar
                      src={imagePreview}
                      alt="Product Image"
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
                      type="text"
                      label="Tên sản phẩm"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.product_name}
                      name="product_name"
                      error={!!touched.product_name && !!errors.product_name}
                      helperText={touched.product_name && errors.product_name}
                    />
                    <TextField
                      fullWidth
                      variant="outlined"
                      type="number"
                      label="Giá"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.price}
                      name="price"
                      error={!!touched.price && !!errors.price}
                      helperText={touched.price && errors.price}
                    />
                    <TextField
                      fullWidth
                      variant="outlined"
                      type="number"
                      label="Số lượng"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.soLuong}
                      name="soLuong"
                      error={!!touched.soLuong && !!errors.soLuong}
                      helperText={touched.soLuong && errors.soLuong}
                    />
                    <TextField
                      fullWidth
                      variant="outlined"
                      type="text"
                      label="Mô tả"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.description}
                      name="description"
                      error={!!touched.description && !!errors.description}
                      helperText={touched.description && errors.description}
                    />
                    <FormControl fullWidth>
                      <Select
                        value={values.category_id || ""}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name="category_id"
                        displayEmpty
                        error={!!touched.category_id && !!errors.category_id}
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
                          <MenuItem disabled>
                            Không có loại sản phẩm nào
                          </MenuItem>
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
                          value="0"
                          control={<Radio />}
                          label="Ẩn"
                        />
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Hiện"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>

              <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" color="primary" variant="contained">
                  {buttonLabel}
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
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default Form;