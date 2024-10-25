import React from "react";
import Navbar from "@components/navbar/navbar";
import Sidebar from "@components/sidebar/sidebar";
import Table from "@/app/components/seller-products/table";
import Button from "@/app/components/seller-products/button";

const Seller: React.FC = () => {
  return (
    <div className="bg-[#f9fafb] h-[100vh]">
      <Navbar />
      <div className="h-[85vh] m-auto flex px-12">
        <Sidebar />
        <div className="w-full">
          <Table />
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Seller;
