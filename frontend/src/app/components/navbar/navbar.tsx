"use client";

import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import PopupLocation from "../popup/popupLocation";
import SearchIndex from "../popup/popupSearchIndex";
import PopupLogin from "../popup/popupLogin";
import NextLink from "next/link";
import Image from "next/image";
import { SlStar } from "react-icons/sl";

interface NavigationItem {
  name: string;
  href: string;
}

interface NavigationSection {
  name?: string;
  items: NavigationItem[];
}

interface NavigationCategory {
  id: string;
  name: string;
  sections: NavigationSection[];
}

interface Navigation {
  categories: NavigationCategory[];
}

const navigation: Navigation = {
  categories: [
    {
      id: "categories",
      name: "Categories",
      sections: [
        {
          items: [
            { name: "Automotive", href: "#" },
            { name: "Babies & Kids", href: "#" },
            { name: "Beauty & Personal Care", href: "#" },
          ],
        },
        {
          items: [
            { name: "Books & Office Supplies", href: "#" },
            { name: "Electronics", href: "#" },
            { name: "Fashion", href: "#" },
          ],
        },
        {
          items: [
            { name: "Health", href: "#" },
            { name: "Hobbies & Collectibles", href: "#" },
            { name: "Home & Decoration", href: "#" },
          ],
        },
        {
          items: [
            { name: "Pet Shop", href: "#" },
            { name: "Sports & Leisure", href: "#" },
            { name: "Tools & Construction", href: "#" },
          ],
        },
      ],
    },
  ],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Fechar menu</span>
                    <HiXMark className="h-6 w-6" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <>
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pb-8 pt-10"
                      >
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            {section.name && (
                              <p
                                id={`${category.id}-${section.name}-heading-mobile`}
                                className="font-medium text-gray-900"
                              >
                                {section.name}
                              </p>
                            )}
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.name}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="-m-2 block p-2 text-gray-500"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      <PopupLogin />
                    </a>
                  </div>
                  <div className="flow-root">
                    <NextLink
                      href={"/pages/auth/register"}
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Criar uma conta
                    </NextLink>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="flex h-4 items-center justify-center bg-[#2144e1] px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
        </p>
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-11 lg:px-11"
        >
          <div className="flex h-16 items-center">
            <button
              type="button"
              className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              onClick={() => setOpen(true)}
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Abrir menu</span>
              <HiBars3 className="h-6 w-6" />
            </button>

            {/* Logo */}
            <div className="ml-4 flex lg:ml-0 justify-start items-start h-full py-3 mt-2">
              <a href="/">
                <Image
                  width={130}
                  height={130}
                  src="/img/logo.svg"
                  alt="Logo"
                />
              </a>
            </div>

            {/* Flyout menus */}
            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
              <div className="flex h-full space-x-8">
                {navigation.categories.map((category) => (
                  <Popover key={category.name} className="flex">
                    {({ open }) => (
                      <>
                        <div className="relative flex">
                          <Popover.Button
                            className={classNames(
                              open
                                ? "border-[#2144e1] text-[#2144e1]"
                                : "border-transparent text-black",
                              "relative z-10 -mb-px flex items-center border-b-2 pt-px text-base font-medium transition-colors duration-200 ease-out outline-none"
                            )}
                          >
                            {category.name}
                          </Popover.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500 z-10">
                            <div
                              className="absolute inset-0 top-1/2 bg-white shadow"
                              aria-hidden="true"
                            />
                            <div className="relative bg-white">
                              <div className="mx-auto max-w-7xl px-8">
                                <div className="grid grid-cols-1 gap-x-8 gap-y-10 py-10">
                                  <div className="row-start-1 grid grid-cols-4 gap-x-8 gap-y-10 text-sm">
                                    {category.sections.map((section) => (
                                      <div key={section.name}>
                                        {section.name && (
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-gray-900"
                                          >
                                            {section.name}
                                          </p>
                                        )}
                                        <ul
                                          role="list"
                                          aria-labelledby={`${section.name}-heading`}
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          {section.items.map((item) => (
                                            <li
                                              key={item.name}
                                              className="flex"
                                            >
                                              <a
                                                href={item.href}
                                                className="hover:text-gray-800"
                                              >
                                                {item.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                ))}
                <PopupLocation />
              </div>
            </Popover.Group>

            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <a
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  <PopupLogin />
                </a>
                <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                <NextLink
                  href="/pages/auth/register"
                  className="text-base font-medium text-black"
                >
                  Criar uma conta
                </NextLink>
              </div>

              <div className="flex lg:ml-6">
                <a href="#" className="p-2 text-black">
                  <span className="sr-only">Procurar</span>
                  <SearchIndex />
                </a>
              </div>
              <div className="flex">
                <NextLink href="/pages/panel/panel-wishlist" className="p-2 text-black">
                  <SlStar className="text-[20px]" />
                </NextLink>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
