"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Get current route
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdAccountCircle } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import routes from "@/navbarRoutes";

export default function Navbar() {
  const pathname = usePathname(); // Get current route
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpenAnimation, setMenuOpenAnimation] = useState(false);
  const [menuItemShow, setMenuItemShow] = useState(false);

  const [rightClickEnabled, setRightClickEnabled] = useState(false);

  // useEffect(() => {
  //   const handleContextMenu = (event) => {
  //     if (!rightClickEnabled) {
  //       event.preventDefault();
  //     }
  //   };

  //   const handleKeyDown = (event) => {
  //     if (event.key === 'p') {
  //       setRightClickEnabled(!rightClickEnabled);
  //     }
  //   };

  //   window.addEventListener('contextmenu', handleContextMenu);
  //   window.addEventListener('keydown', handleKeyDown);

  //   return () => {
  //     window.removeEventListener('contextmenu', handleContextMenu);
  //     window.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, [rightClickEnabled]);

  // Function to check active link
  const isActive = (href) =>
    pathname === href ? "underline-animate-active" : "underline-animate";

  // useEffect(() => {
  //   const checkScreenSize = () => {
  //     setIsMobile(window.innerWidth < 1000);
  //   };

  //   checkScreenSize(); // Run once on mount
  //   window.addEventListener("resize", checkScreenSize); // Listen for window resize

  //   return () => window.removeEventListener("resize", checkScreenSize); // Cleanup
  // }, []);

  const openMenu = () => {
    setMenuOpen(true);
    setTimeout(() => {
      setMenuOpenAnimation(true);
    }, 500);
    setTimeout(() => {
      setMenuItemShow(true);
    }, 1300);
  };

  const closeMenu = () => {
    setMenuOpenAnimation(false);
    setTimeout(() => {
      setMenuOpen(false);
      setMenuItemShow(false);
    }, 1000);
  };

    return (
      <>
      <div className="block md:hidden">
        {/* Mobile Navbar Header */}
        <div className="absolute top-0 w-full z-50 h-20 flex justify-between items-center p-5 text-white">
          <Link href="/">
            {/* <Image
              src="/assets/logo/logo.png"
              alt="CAREisLife Logo"
              width={200}
              height={200}
              priority
            /> */}
            Logo here
          </Link>
          <RxHamburgerMenu
            className="text-2xl cursor-pointer text-white"
            onClick={openMenu}
          />
        </div>
        {/* Mobile Sidebar Menu */}
        {menuOpen && (
          <div
            className={`fixed top-0 left-0 w-full h-full bg-black text-white opacity-0 transform transition-all duration-1000 ease-in-out z-50 flex items-center justify-center ${
              menuOpenAnimation
                ? "opacity-100 translate-y-0 h-screen"
                : "-translate-y-full opacity-0"
            }`}
            style={{ transitionProperty: "transform, opacity" }}
          >
            <IoMdClose
              className="absolute top-5 right-5 text-3xl cursor-pointer"
              onClick={closeMenu}
            />
            {menuItemShow && (
              <ul className="flex flex-col items-center gap-5 p-5 ">
                {routes.map((route) => (
                  <li
                    key={route.path}
                    data-aos="fade-right"
                    data-aos-duration={route.duration}
                  >
                    <Link
                      href={route.path}
                      className={`uppercase ${isActive(route.path)}`}
                      onClick={closeMenu}
                    >
                      {route.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
      {/* Desktop Navbar Header */}
      <div className="hidden md:block">
      {/* bg-gradient-to-b from-white/60 to-transparent */}
        <div
          className={`text-negative-remove absolute z-40 top-0 left-0 w-full transition-transform duration-300 h-44`}>
          <div className={`flex justify-between items-center p-8 md:p-5 text-white`}>
            {/* <Image
              src="/assets/logo/logo.png"
              alt="CAREisLife Logo"
              width={200}
              height={200}
              priority
            /> */}
            Logo here
          </div>
        </div>

        <div
          className={`text-negative-remove absolute z-50 top-0 left-0 w-full transition-transform duration-300 `}
        >
          <div className={`flex justify-end items-center py-10`}>
            <nav className="flex justify-end items-center gap-6 mx-6 text-white">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={`uppercase ${isActive(route.path)}`}
                >
                  {route.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      </>
    );
}
