import React from "react";
import Header from "./Header";
import Carousell from "./Carousell";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div style={{marginTop:"90px"}}>
      <Header />
      {children ? children : <Carousell />}
      <Footer />
    </div>
  );
};

export default Layout;
