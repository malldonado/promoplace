import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#2144e1] w-full h-full pb-1">
      <div className="flex flex-col lg:flex-row w-full justify-center items-center h-full max-w-7xl lg:mx-auto lg:justify-between lg:px-12">
        <div className="items-center w-full lg:w-full flex lg:justify-center justify-center mb-2 lg:mb-0">
          <ul className="text-white text-center lg:text-left">
            <Link href='/'>
              <Image className="cursor-pointer mx-auto lg:mx-0 my-8 lg:my-0 lg:mb-1 lg:mt-7" width={150} height={130} src="/img/white.svg" alt="Logo" />
            </Link>
          </ul>
        </div>
      </div>
      <p className="text-white text-center mb-2 font-light opacity-75 lg:mt-4 pb-6 lg:pb-2">
        © promoplace all rights 2023 - Designed by malldonado
      </p>
    </div>
  );
}

export default Footer;
