import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import NextLink from "next/link";
import { SideSheet } from "evergreen-ui";
import Image from "next/image";

const PopupLogin: React.FC = () => {
  const [isLogin, setLogin] = useState<boolean>(false);

  const handleLoginClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // Implement login logic here
  };

  const openLoginModal = () => {
    setLogin(true);
  };

  return (
    <div>
      <button className="text-black text-base" onClick={openLoginModal}>Acessar</button>
      <React.Fragment>
        <SideSheet isShown={isLogin} onCloseComplete={() => setLogin(false)}>
          <div className="flex flex-col items-center justify-center h-screen max-w-[80%] m-auto">
            <Image
              width={150}
              height={150}
              className="cursor-pointer"
              src="/img/logo.svg"
              alt="Logo"
            />
            <div className="mt-10 w-[90%]">
              <h2 className="text-[26px] font-bold nunito-font">Acessar</h2>
              <p className="nunito-font text-[14px] mt-4 text-gray-500">
              Faça login com os dados que você inseriu durante o seu
              registro.
              </p>
              <form className="mt-10">
                <label
                  className="nunito-font text-[14px] mt-4 text-gray-500"
                  htmlFor="Email"
                >
                  Email
                </label>
                <input
                  className="w-full block outline-none border-[1px] border-gray-300 rounded-md h-[40px] p-2 text-[#2144e1] font-bold nunito-font mt-1 mb-4 placeholder:font-normal"
                  type="email"
                  placeholder="E-mail"
                  id="Email"
                  required
                />
                <label
                  className="nunito-font text-[14px] mt-4 text-gray-500"
                  htmlFor="Password"
                >
                  Senha
                </label>
                <input
                  className="w-full block outline-none border-[1px] border-gray-300 rounded-md h-[40px] p-2 text-[#2144e1] font-bold nunito-font mt-1 placeholder:font-normal"
                  type="password"
                  placeholder="Senha"
                  id="Password"
                  required
                />
                <div className="flex mt-6">
                  <input type="checkbox" id="KeepMeLoggedIn" />
                  <label
                    htmlFor="KeepMeLoggedIn"
                    className="ml-2 nunito-font text-gray-500 text-[14px] font-medium"
                  >
                    Mantenha-me conectado
                  </label>
                </div>
                <button
                  onClick={handleLoginClick}
                  className="w-full h-[40px] bg-[#2144e1] mt-4 text-white nunito-font rounded-md"
                >
                  Acessar
                </button>
                {/* <button className="w-full h-[40px] bg-[#3870ff] mt-4 text-white nunito-font rounded-md flex justify-center items-center">
                  <FaGoogle className="mr-2" />
                  Conectar com Google
                </button> */}
                <p className="pt-4 nunito-font text-gray-500 text-[14px] font-normal">
                  Você não tem uma conta?{" "}
                  <NextLink
                    className="text-[#2144e1] text-[15px] font-bold"
                    href="/pages/auth/register"
                  >
                    Registrar
                  </NextLink>
                </p>
              </form>
            </div>
          </div>
        </SideSheet>
      </React.Fragment>
    </div>
  );
};

export default PopupLogin;
