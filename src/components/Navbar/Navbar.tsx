import React, { useState } from "react";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../api/auth";
import { clearUser } from "../../store/actions/user";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { Menu } from "@mui/icons-material";
export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const user = useSelector<user, user>((user) => user);
  const isLoggedIn = Boolean(user.email.length);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOpen = (state: boolean) => {
    setOpen(state);
  };
  const handleLoginRedirect = (ev: any) => {
    navigate("/login");
  };
  const handleLogout = (ev: any) => {
    logout().then((res) => {
      if (res.status === 200) {
        dispatch(clearUser());
        navigate("/", { replace: true });
      }
    });
  };
  console.log(isLoggedIn);

  return (
    <AppBar color="primary">
      <Toolbar>
        <IconButton
          sx={(theme) => {
            return {
              [theme.breakpoints.up("sm")]: {
                display: "none",
              },
            };
          }}
          onClick={() => handleOpen(true)}
        >
          <Menu color="secondary" />
        </IconButton>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography color="white" variant="h5">
            NearArk
          </Typography>
        </Link>
        {isLoggedIn && (
          <React.Fragment>
            <NavbarDesktop />
            <NavbarMobile open={open} openHandler={handleOpen} />
          </React.Fragment>
        )}
        <Box sx={{ flex: 1 }} />
        {!isLoggedIn ? (
          <Button
            onClick={handleLoginRedirect}
            variant="outlined"
            color="secondary"
          >
            Login
          </Button>
        ) : (
          <Button onClick={handleLogout} variant="outlined" color="secondary">
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
