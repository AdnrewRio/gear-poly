import React, { useEffect, useState } from "react";
import { Box, TextField, Button, Typography, Grid } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CategoriesForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    categories_name: "",
  });

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8080/api/categories/${id}`)
        .then((response) => {
          const category = response.data;
          setInitialValues({
            categories_name: category.categories_name || "",
          });
        })
        .catch((error) => {
          console.error("Error fetching category data:", error);
        });
    }
  }, [id]);

  const handleFormSubmit = async (values) => {
    try {
      const apiCall = id
        ? axios.put(`http://localhost:8080/api/categories/${id}`, values)
        : axios.post(`http://localhost:8080/api/categories`, values);

      await apiCall;
      toast.success(id ? "Cập nhật danh mục thành công!" : "Thêm danh mục thành công!");
      setTimeout(() => navigate("/admin/categories"), 1500);
    } catch (error) {
      console.error("Request failed:", error.response || error.message || error);
      toast.error(id ? "Cập nhật danh mục thất bại!" : "Thêm danh mục thất bại!");
    }
  };

  return (
    <Box p="2%" m="20px">
      <Typography variant="h4" mb="20px">
        {id ? "Chỉnh sửa danh mục" : "Thêm danh mục"}
      </Typography>

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={categorySchema}
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
              <Grid item xs={12}>
                <Box display="grid" gap="20px">
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Tên danh mục"
                    name="categories_name"
                    value={values.categories_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.categories_name && !!errors.categories_name}
                    helperText={touched.categories_name && errors.categories_name}
                  />
                </Box>
              </Grid>
            </Grid>
            <Box display="flex" justifyContent="flex-end" mt="20px">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2, mr: 2 }}
              >
                {id ? "Cập nhật danh mục" : "Thêm danh mục"}
              </Button>
              <Button
                color="secondary"
                variant="contained"
                onClick={() => navigate("/admin/categories")}
                sx={{ mt: 2 }}
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

const categorySchema = yup.object().shape({
  categories_name: yup.string().required("Tên danh mục là bắt buộc"),
});

export default CategoriesForm;
