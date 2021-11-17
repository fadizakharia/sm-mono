import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import { signup } from "../../api/auth";

import { signupValidator } from "../../validation/userValidator";

export default function Signup() {
  const [success, setSuccess] = useState<boolean>(false);
  const signupHandler = (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    signup(firstName, lastName, email, password, confirmPassword)
      .then((res) => {
        console.log(res);

        if (res.status === 200) {
          setSuccess(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Formik
      initialValues={{
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: "",
      }}
      onSubmit={(values) =>
        signupHandler(
          values.first_name,
          values.last_name,
          values.email,
          values.password,
          values.confirm_password
        )
      }
      validationSchema={signupValidator}
      validateOnBlur={true}
      validateOnChange={true}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          initialValues,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <form
            style={{ marginTop: "100px", padding: "20px" }}
            onSubmit={(event) => {
              event.preventDefault();
              return handleSubmit();
            }}
          >
            <Box sx={{ margin: "20px auto", maxWidth: "500px" }}>
              {success && (
                <Alert severity="success">
                  You have successfully signed up!
                </Alert>
              )}
              <TextField
                variant="outlined"
                label="email *"
                name="email"
                value={values.email}
                fullWidth
                FormHelperTextProps={{
                  style: { color: "red", opacity: 0.5 },
                }}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.email && touched.email}
                error={errors.email && touched.email ? true : false}
                margin="normal"
              />
              <TextField
                variant="outlined"
                label="first name *"
                name="first_name"
                value={values.first_name}
                fullWidth
                FormHelperTextProps={{
                  style: { color: "red", opacity: 0.5 },
                }}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.first_name && touched.first_name}
                error={errors.first_name && touched.first_name ? true : false}
                margin="normal"
              />
              <TextField
                variant="outlined"
                label="last name *"
                name="last_name"
                value={values.last_name}
                fullWidth
                FormHelperTextProps={{
                  style: { color: "red", opacity: 0.5 },
                }}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.last_name && touched.last_name}
                error={errors.last_name && touched.last_name ? true : false}
                margin="normal"
              />
              <TextField
                variant="outlined"
                label="password *"
                name="password"
                fullWidth
                type="password"
                value={values.password}
                FormHelperTextProps={{
                  style: { color: "red", opacity: 0.5 },
                }}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.password && touched.password}
                error={errors.password && touched.password ? true : false}
                margin="normal"
              />
              <TextField
                variant="outlined"
                label="confirm password *"
                name="confirm_password"
                fullWidth
                type="password"
                value={values.confirm_password}
                FormHelperTextProps={{
                  style: { color: "red", opacity: 0.5 },
                }}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.confirm_password && touched.confirm_password}
                error={
                  errors.confirm_password && touched.confirm_password
                    ? true
                    : false
                }
                margin="normal"
              />
              <Box sx={{ textAlign: "center" }}>
                <Button
                  sx={{ margin: "30px" }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={!!errors.email || !!errors.password}
                >
                  Signup
                </Button>
                <Typography variant="subtitle1">
                  already have an account? <Link to="/login">login</Link>
                </Typography>
              </Box>
            </Box>
          </form>
        );
      }}
    </Formik>
  );
}
