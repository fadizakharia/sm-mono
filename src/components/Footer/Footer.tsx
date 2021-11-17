import { Typography } from "@mui/material";
import React from "react";
import classes from "./Footer.module.css";
export default function Footer() {
  return (
    <div className={classes.footerWrapper}>
      <Typography align="left" variant="caption" color="white">
        NearArk &#169; 2021 all rights reserved.
      </Typography>
    </div>
  );
}
