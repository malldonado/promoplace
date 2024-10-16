"use client";
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { BiShow } from "react-icons/bi";
import { GrFormViewHide } from "react-icons/gr";
import NextLink from "next/link";
import Image from "next/image";

function RegisterRight() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");

  const handleCheckboxChange = () => {
    setTerms(!terms);
  };

  const handleChangePassword = () => {
    setShowPassword(!showPassword);
  };

  if (info) {
    return (
      <NextLink href="/pages/auth/login">
        <span>Redirecionando...</span>
      </NextLink>
    );
  }

  return (
    <div className="w-[45%]">
      <NextLink href="/">
        <IoCloseSharp className="absolute text-[45px] top-5 right-5 text-[#2144e1] cursor-pointer" />
      </NextLink>
      <div className="flex flex-col items-center justify-center h-screen">
        <Image
          width={150}
          height={150}
          src="/img/logo.svg"
          alt="Logo"
          className="mt-8"
        />
        <div className="mt-10 w-[400px]">
          <h2 className="text-[26px] font-bold nunito-font">Registrar</h2>
          <p className="nunito-font text-[14px] mt-4 text-gray-500">
            Faça login com os dados que você inseriu durante seu registro.
          </p>
          <form className="mt-4">
            <label
              className="nunito-font text-[14px] text-gray-500"
              htmlFor="Email"
            >
              Email
            </label>
            <input
              className="w-full block outline-none border-[1px] border-gray-300 rounded-md h-[40px] p-2 text-[#2144e1] font-bold nunito-font mt-1 mb-2 placeholder:font-normal"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <label
              className="nunito-font text-[14px] text-gray-500"
              htmlFor="Password"
            >
              Senha
            </label>
            <div className="relative">
              <input
                className="w-full block outline-none border-[1px] border-gray-300 rounded-md h-[40px] p-2 text-[#2144e1] font-bold nunito-font mt-1 placeholder:font-normal mb-4"
                placeholder="Senha"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="absolute bottom-[10px] right-2 cursor-pointer"
                onClick={handleChangePassword}
              >
                {showPassword ? (
                  <GrFormViewHide className="text-[#2144e1] text-[20px]" />
                ) : (
                  <BiShow className="text-[#2144e1] text-[20px]" />
                )}
              </span>
            </div>
            {/* <div className="flex mt-6">
              <input
                type="checkbox"
                checked={terms}
                onChange={handleCheckboxChange}
              />
            </div> */}
            {error && <div style={{ color: "red" }}>{error}</div>}
            {info && <div style={{ color: "green" }}>{info}</div>}
            <button className="w-full h-[40px] bg-[#2144e1] text-white nunito-font rounded-md">
              Registrar
            </button>
            <p className="pt-4 nunito-font text-gray-500 text-[14px] font-normal">
            Já tenho uma conta {" "}
              <NextLink href="/pages/auth/login" passHref>
                <span className="text-[#2144e1] text-[15px] font-bold">
                  Acessar
                </span>
              </NextLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterRight;
