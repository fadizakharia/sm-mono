import { Box, CircularProgress, Modal } from "@mui/material";
import React from "react";

export default function Spinner() {
  return (
    <Modal sx={{ position: "relative" }} open={true}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <CircularProgress color="primary" />
      </Box>
    </Modal>
  );
}
