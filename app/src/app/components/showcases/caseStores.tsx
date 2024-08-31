import React from "react";
import { FaStar } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

const CaseBestSellers: React.FC = () => {
  return (
    <div className="max-w-7xl mb-[100px] mt-[90px] mx-auto px-12">
      <div className="flex w-full">
        <h2 className="font-bold text-[30px] w-[80%]">Stores</h2>
      </div>
      <div className="flex justify-center items-center h-auto mt-10">
  <div className="relative cursor-pointer w-[200px] h-[200px]">
    <Image 
      width={200} 
      height={200} 
      className="w-full h-full object-cover"  
      src="/img/profile.svg" 
      alt="Product" 
    />
  </div>
</div>
      <button className="text-white font-bold bg-[#2144e1] mt-10 w-[120px] flex justify-center items-center h-[45px] rounded-[8px] text-[14px] outline-none">
        View All <IoIosArrowForward />
      </button>
    </div>
  );
};

export default CaseBestSellers;
