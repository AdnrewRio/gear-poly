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
  price: yup.number().required("Vui lòng không bỏ trống!"),
  soLuong: yup.number().required("Vui lòng không bỏ trống!"),
  description: yup.string().required("Vui lòng không bỏ trống!"),
  category_id: yup.string().required("Vui lòng không bỏ trống!"),
  image: yup.string().nullable(),
  hien: yup.string().oneOf(["0", "1"], "Trạng thái không hợp lệ"),
});

const Form = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(max-width:600px)");

  const [initialValues, setInitialValues] = useState({
    id: "",
    product_name: "",
    price: "",
    soLuong: "",
    description: "",
    hien: "0", // Giá trị mặc định cho trạng thái là 0 (hiện)
    category_id: "",
    image: "",
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/categories`)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });

    if (id) {
      axios.get(`http://localhost:8080/api/products/${id}`)
        .then((response) => {
          const product = response.data;
          if (product) {
            setInitialValues({
              id: product.id || "",
              product_name: product.product_name || "",
              price: product.price || "",
              soLuong: product.soLuong || "",
              description: product.description || "",
              hien: product.hien ? "0" : "1", // 0 là hiện, 1 là ẩn
              category_id: product.categories_id,
              image: product.image || ""
            });
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [id]);

  const handleFormSubmit = (values) => {
    const formattedValues = {
      ...values,
      hien: values.hien === "0" ? 0 : 1, // 0 là hiện, 1 là ẩn
    };

    const apiCall = id
      ? axios.put(`http://localhost:8080/api/products/${id}`, formattedValues)
      : axios.post(`http://localhost:8080/api/products`, formattedValues);

    apiCall
      .then((response) => {
        toast.success(
          id ? "Cập nhật sản phẩm thành công!" : "Thêm sản phẩm thành công!"
        );
        setTimeout(() => {
          navigate("/admin/products");
        }, 1500);
      })
      .catch((error) => {
        console.error(
          id ? "Error updating product:" : "Error adding product:",
          error
        );
        toast.error(
          id ? "Cập nhật sản phẩm thất bại!" : "Thêm sản phẩm thất bại!"
        );
      });
  };

  const handleImageClick = () => {
    document.getElementById("imageInput").click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setInitialValues((prevValues) => ({
        ...prevValues,
        image: file.name,
      }));
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
                      src={
                        values.image
                          ? `../../../../images/${values.image}`
                          : ""
                      }
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
                        value={values.category_id}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name="category_id"
                        displayEmpty
                        error={!!touched.category_id && !!errors.category_id}
                      >
                        <MenuItem value="" disabled>
                          Chọn loại sản phẩm
                        </MenuItem>
                        {categories.map((category) => (
                          <MenuItem key={category.id} value={category.id}>
                            {category.name}
                          </MenuItem>
                        ))}
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
                          value="0" // 0 là hiện
                          control={<Radio />}
                          label="Hiện"
                        />
                        <FormControlLabel
                          value="1" // 1 là ẩn
                          control={<Radio />}
                          label="Ẩn"
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
