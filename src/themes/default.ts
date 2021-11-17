import { createTheme } from "@mui/material/styles";
import "./fonts.css";
const theme = createTheme({
  typography: {
    fontFamily: "Spartan",
    h1: {
      fontFamily: "RocknRoll",
      fontStyle: "italic",
    },
    h2: {
      fontFamily: "RocknRoll",
    },
    h3: {
      fontFamily: "RocknRoll",
    },
    h4: {
      fontFamily: "RocknRoll",
    },
    h5: {
      fontFamily: "RocknRoll",
    },
    h6: {
      fontFamily: "RocknRoll",
    },
    subtitle1: { fontFamily: "RocknRoll" },
    subtitle2: { fontFamily: "Roboto" },
  },
  palette: {
    primary: { main: "#700c0e" },
    secondary: {
      main: "#ffffff",
    },
  },
});
export default theme;
