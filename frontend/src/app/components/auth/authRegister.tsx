"use client";
import { SlUser, SlPeople } from "react-icons/sl";
import NextLink from "next/link";

import React from "react";
function AuthRegister() {
  return (
    <div className="w-full bg-[#f9fafb] h-screen flex items-center justify-center gap-16 text-white">
      <NextLink href="/" passHref>
        <div className="bg-[#5d87ff] hover:bg-[#2144e1] h-48 w-80 rounded-3xl cursor-pointer text-center flex items-center justify-center text-xl">
          <SlUser className="mr-2 h-6 w-6" />
          <p>Conta de cliente</p>
        </div>
      </NextLink>
      <NextLink href="/" passHref>
        <div className="bg-[#5d87ff] hover:bg-[#2144e1] h-48 w-80 rounded-3xl cursor-pointer text-center flex items-center justify-center text-xl">
          <SlPeople className="mr-2 h-6 w-6" />
          <p>Conta de vendedor</p>
        </div>
      </NextLink>
    </div>
  );
}

export default AuthRegister;
