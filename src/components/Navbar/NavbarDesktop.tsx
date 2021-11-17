import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

export default function NavbarDesktop() {
  return (
    <Box
      sx={(theme) => {
        return {
          display: "flex",
          flexDirection: "row",
          [theme.breakpoints.down("sm")]: {
            display: "none",
          },
        };
      }}
    >
      <Link to="/user" style={{ textDecoration: "none" }}>
        <Typography
          variant="h6"
          color="white"
          sx={{
            "&:hover": { textDecoration: "underline" },
            marginLeft: "20px",
          }}
        >
          profile
        </Typography>
      </Link>
      <Link to="/search" style={{ textDecoration: "none" }}>
        <Typography
          variant="h6"
          color="white"
          sx={{
            "&:hover": { textDecoration: "underline" },
            marginLeft: "20px",
          }}
        >
          Find Friends
        </Typography>
      </Link>
    </Box>
  );
}
