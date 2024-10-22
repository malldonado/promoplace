"use client";
import React, { useState, useEffect } from "react";
import {
  IoChatboxOutline,
  IoPricetagOutline,
  IoSettingsOutline,
  IoExitOutline,
  IoLibraryOutline,
} from "react-icons/io5";
import { SlStar } from "react-icons/sl";
import Link from "next/link";

interface SidebarProps {}

interface SidebarItem {
  id: number;
  label: string;
  route: string;
  emoji: JSX.Element;
}

const Sidebar: React.FC<SidebarProps> = () => {
  const [selectedItem, setSelectedItem] = useState<SidebarItem | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [pathname, setPathname] = useState<string>("");
  const [isSellerRoute, setIsSellerRoute] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      setPathname(path);
      setIsSellerRoute(path.startsWith("/seller"));
    }
    return () => {
      setIsMounted(false);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  const items: SidebarItem[] = isSellerRoute
    ? 
    [
      {
        id: 1,
        label: "Wishlist",
        route: "/pages/panel/panel-wishlist",
        emoji: <SlStar className="w-5 h-5 mr-2" />,
      },
      {
        id: 2,
        label: "Discount",
        route: "/pages/panel/panel-discount",
        emoji: <IoPricetagOutline className="w-5 h-5 mr-2" />,
      },
      {
        id: 3,
        label: "Message",
        route: "/pages/panel/panel-message",
        emoji: <IoChatboxOutline className="w-5 h-5 mr-2" />,
      },
      {
        id: 4,
        label: "Settings",
        route: "/pages/panel/panel-settings",
        emoji: <IoSettingsOutline className="w-5 h-5 mr-2" />,
      },
      {
        id: 5,
        label: "Home",
        route: "/",
        emoji: <IoExitOutline className="w-5 h-5 mr-2" />,
      },
    ]
    : [
      {
        id: 1,
        label: "Products",
        route: "/pages/seller/seller-products",
        emoji: <IoLibraryOutline className="w-5 h-5 mr-2" />,
      },
      {
        id: 2,
        label: "Discount",
        route: "/pages/seller/seller-discount",
        emoji: <IoPricetagOutline className="w-5 h-5 mr-2" />,
      },
      {
        id: 3,
        label: "Message",
        route: "/pages/seller/seller-message",
        emoji: <IoChatboxOutline className="w-5 h-5 mr-2" />,
      },
      {
        id: 4,
        label: "Settings",
        route: "/pages/seller/seller-settings",
        emoji: <IoSettingsOutline className="w-5 h-5 mr-2" />,
      },
      {
        id: 5,
        label: "Home",
        route: "/",
        emoji: <IoExitOutline className="w-5 h-5 mr-2" />,
      },
    ]

  const handleItemClick = (item: SidebarItem) => {
    setSelectedItem(item);
  };

  return (
    <div className={`py-2 mr-4 h-full w-[250px]`}>
      {/* NAVBAR LEFT */}
      <div>
        <div className="md:flex">
          <ul
            className={`flex-column space-y space-y-2 text-[16px] font-medium dark:text-gray-400 md:me-4 mb-4 md:mb-0 w-full mt-10`}
          >
            {items.map((item) => (
              <li key={item.id}>
                <Link href={item.route}>
                  {/* Removed <a> tag and placed content directly inside Link */}
                  <div
                    className={`inline-flex items-center px-2 py-3 rounded-sm w-full mb-1 ${
                      pathname === item.route
                        ? "text-white bg-[#5d87ff] active"
                        : "text-blue-700 hover:text-white hover:bg-blue-700 bg-white"
                    }`}
                  >
                    {item.emoji}
                    {item.label}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
