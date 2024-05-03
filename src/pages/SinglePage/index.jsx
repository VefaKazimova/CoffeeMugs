import React from "react";
import Header from "../../Components/Header";
import Main from "../../Components/Main";
import ProductsDetail from "../../Components/ProductsDetail";
import Footer from "../../Components/Footer";
import SignPage from "../../Components/SignPage";

const SinglePage = () => {
  return (
    <div>
      <Header />
      <Main />
      <ProductsDetail />
      <SignPage />
      <Footer />
    </div>
  );
};

export default SinglePage;
