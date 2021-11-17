import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
interface ILayout {}
export const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  );
};
