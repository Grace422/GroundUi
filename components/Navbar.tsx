"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="h-full w-full fixed z-10">
      <nav
        className={`flex items-center justify-between py-4 px-8
                ${
                  isScrolled ? "backdrop-blur-lg border-b " : "bg-transparent"
                }`}
      >
        <Link href="/">
          <div className="rounded-lg bg-slate-900 text-white size-10 flex items-center justify-center">
            <h1 className="font-bold text-2xl">G</h1>
          </div>
        </Link>
        <div>
          {isOpen ? (
            <X size={20} onClick={toggleNavbar} />
          ) : (
            <Menu size={20} onClick={toggleNavbar} />
          )}
        </div>
        <div className="flex items-center justify-between">
          <ul className="hidden gap-8 items-center lg:flex text-xl">
            <Link href="/pricing">
              <li>Pricing</li>
            </Link>
            <Link href="/feature">
              <li>Feature</li>
            </Link>
            <Link href="/career">
              <li>Career</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="hidden lg:flex items-center bg-slate-900 py-2 px-10 rounded-full">
          <button className="text-white text-sm">Get this Template</button>
        </div>
      </nav>
      <div
        className={`flex items-center justify-between transition-transform duration-[750ms] ease-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul className="hidden gap-8 items-center lg:flex text-xl">
          <Link href="/pricing">
            <li>Pricing</li>
          </Link>
          <Link href="/feature">
            <li>Feature</li>
          </Link>
          <Link href="/career">
            <li>Career</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
