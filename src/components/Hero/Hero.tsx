import { Button, Typography } from "@mui/material";
import React from "react";
import classes from "./Hero.module.css";
export default function Hero() {
  return (
    <header
      className={classes.heroContainer}
      style={{
        backgroundImage: [
          "linear-gradient(to bottom, #ad2102c3, #610b00ca)",
          "url(/images/network.gif)",
        ].join(","),
      }}
    >
      <div className={classes.heroContentWrapper}>
        <Typography
          sx={{ margin: "20px" }}
          variant="h4"
          className={classes.heroTitle}
          color="white"
        >
          NearArk
        </Typography>
        <Typography variant="body1" className={classes.heroDescription}>
          A social network designed specifically for mmorpg gamers with a focus
          on anonymity
        </Typography>
        <Button
          sx={{ marginTop: "20px" }}
          className={classes.btnCTA}
          variant="outlined"
          color="secondary"
        >
          JOIN US
        </Button>
      </div>
    </header>
  );
}
