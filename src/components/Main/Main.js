import React from "react";
import Header from "./Header/Header";
import Cards from "./Cards/Cards";
import Footer from "./Footer/Footer";
import "./styles.scss";

const Main = () => {
  return (
    <div className="main-container">
      <Header />
      <Cards />
      <Footer />
    </div>
  );
};

export default Main;
