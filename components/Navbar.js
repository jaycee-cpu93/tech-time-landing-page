"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import mobileMenuLogo from "../assets/mobile-menu-logo.svg";
import menuLogo from "../assets/menu-logo.svg";
import hamburger from "../assets/hamburger.svg";
import { satoshiFont } from "@/lib/fonts"; // Importing local font


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
     <nav className={`bg-primary p-3 lg:p-8 ${satoshiFont.className}`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-22">
             <div className="flex items-center">
                  <Link href="/" className="hidden md:block">
                     <Image src={menuLogo} alt="menu logo"  width={140} height={140}/>
                  </Link>
                  {/* Mobile Logo */}
                  <Link href="/" className="block md:hidden">
                     <Image src={mobileMenuLogo} alt="mobile menu logo"  width={70} height={60}/>
                  </Link>
             </div>
             <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                <Link href="#">
                     <h3 className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm">
                        Home
                     </h3>
                  </Link>
                  <Link href="#">
                     <h3 className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm">
                        About Us
                     </h3>
                  </Link>
                  <Link href="/testimonials">
                     <h3 className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm">
                        Testimonials
                     </h3>
                  </Link>
                  <Link href="/community">
                     <h3 className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm">
                        Community
                     </h3>
                  </Link>
                  <Link href="/enrollnow">
                     <button className="bg-white text-primary py-3 px-4 rounded-sm shadow hover:bg-gray-400 transition duration-300 w-full sm:w-auto">
                           Enroll Now
                     </button>
                  </Link>
                </div>
             </div>
             <div className="-mr-2 flex md:hidden ">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-3 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? (
                     <svg
                        className="h-6 w-7"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                     >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                     </svg>
                  ) : (
                     <Image src={hamburger} alt="hamburger" height={30} width={26} />
                  )}
                </button>
             </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
             <div className="px-2 pb-3 space-y-1 sm:px-3">
                <Link href="/about">
                  <h3 className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base">
                     About
                  </h3>
                </Link>
                <Link href="/services">
                  <h3 className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base">
                     Services
                  </h3>
                </Link>
                <Link href="#">
                  <h3 className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base">
                     Contact
                  </h3>
                </Link>
                <Link href="/enrollnow">
                     <button className="bg-white text-primary py-3 px-4 rounded-sm shadow hover:bg-gray-400 transition duration-300 sm:w-auto">
                           Enroll Now
                     </button>
                  </Link>
             </div>
          </div>
        )}
     </nav>
  );
}