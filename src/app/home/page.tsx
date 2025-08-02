import React from "react";
import Hero from "./components/Hero";
import FeaturedCategories from "./components/Products";
import WhyChooseUs from "./components/WhyChooseUs";
import BestSelling from "./components/BestSelling";
import BannerImage from "./components/BannerImage";

// import Brands from "./components/Brands";
import Banner from "./components/Banner";
import ProductTabs from "./components/ProductTabs";
import ReadMore from "./components/ReadMore";
import BrandsSection from "./components/BrandSection";


const Home = () => {
  return (
    <div>
      <Hero />
      <ProductTabs />
      <ReadMore/>
      <FeaturedCategories />
      <BrandsSection />
      {/* <Brands /> */}
      <BannerImage />
      <BestSelling />
      <Banner />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
