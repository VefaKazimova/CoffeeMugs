import React from "react";
import Header from "../../Components/Header";
import Main from "../../Components/Main";
import About from "../../Components/About";
import FeaturedMugs from "../../Components/FeaturedMugs";
import Products from "../../Components/Products";
import CoffeeMagazine from "../../Components/CoffeeMagazine";
import SignPage from "../../Components/SignPage";
import Footer from "../../Components/Footer";
import Stories from "../../Components/Stories";
const Home = () => {
  return (
    <div>
      <Header />
      <Main />
      <About />
      <FeaturedMugs />
      <Products />
      <CoffeeMagazine />
      <Stories />
      <SignPage />
      <Footer />
    </div>
  );
};

export default Home;
