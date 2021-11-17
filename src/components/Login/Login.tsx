import { Box, Button, TextField, Typography, Alert } from "@mui/material";
import React, { useState } from "react";
import { Formik } from "formik";
import { loginValidator } from "../../validation/userValidator";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import { useDispatch, useSelector } from "react-redux";

import { setUser } from "../../store/actions/user";
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector<user, user>((user) => user);
  const isLoggedIn = Boolean(user.email);
  const [Error, setError] = useState<{ field: string; message: string }[]>([]);
  const loginHandler = (email: string, password: string) => {
    login(email, password)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          dispatch(setUser(res.data.user));
          navigate("/", { replace: true });
        }
      })
      .catch((err) => {
        if (err.status === 400) {
          setError(JSON.parse(err.message));
        }
        console.log(err);
      });
  };
  console.log(isLoggedIn);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => loginHandler(values.email, values.password)}
      validationSchema={loginValidator}
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
            style={{ margin: "50px auto", padding: "20px" }}
            onSubmit={(event) => {
              event.preventDefault();
              return handleSubmit(event);
            }}
          >
            <Box sx={{ margin: "20px auto", maxWidth: "500px" }}>
              {Error &&
                Error.length > 0 &&
                Error.map((err) => (
                  <Alert severity="error">
                    <Typography variant="body1">{err.field}</Typography>
                    <Typography variant="caption">{err.message}</Typography>
                  </Alert>
                ))}
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
              <Box sx={{ textAlign: "center" }}>
                <Button
                  sx={{ margin: "30px" }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={!!errors.email || !!errors.password}
                >
                  Login
                </Button>
                <Typography variant="subtitle1">
                  don't have an account? <Link to="/signup">signup</Link>
                </Typography>
              </Box>
            </Box>
          </form>
        );
      }}
    </Formik>
  );
}
