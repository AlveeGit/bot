import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Banner from "./Banner";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Banner />
      <Navbar />
      <main className="flex-grow">
        <div className="">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
