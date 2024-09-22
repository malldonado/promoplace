import React from "react";
import Navbar from "@components/navbar/navbar";
import ProductBanner from "@components/product/productBanner";
import Footer from "@components/footer/footer";

const Product: React.FC = () => {
  return (
    <>
      <Navbar />
      <ProductBanner />
      <Footer />
    </>
  );
}

export default Product;
