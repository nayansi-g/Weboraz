"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, TextAlignEnd, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-[#F5F6F4]"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        {/* Logo */}
       <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#cfe3dd] bg-white shadow-[0_12px_28px_rgba(22,49,59,0.08)]">
            <Image
              src="/weboraz-logo.png"
              alt="weboraz logo"
              fill
              sizes="48px"
              className="object-contain "
              priority
            />
          </div>
          <div>
            <p className="font-[family:var(--font-cormorant)] text-2xl font-bold leading-[1.2] text-[#0F252D]">
              Weboraz
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#5f7480]">
              Web Solutions
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className="flex items-center gap-1 text-[17px] font-medium text-[#1f1f1f] transition hover:text-green-700"
          >
            Home 
          </Link>

          <Link
            href="/services"
            className="flex items-center gap-1 text-[17px] font-medium text-[#1f1f1f] transition hover:text-green-700"
          >
            Services 
          </Link>

          <Link
            href="/projects"
            className="flex items-center gap-1 text-[17px] font-medium text-[#1f1f1f] transition hover:text-green-700"
          >
            Projects 
            {/* <ChevronDown size={18} /> */}
          </Link>

          <Link
            href="/about"
            className="flex items-center gap-1 text-[17px] font-medium text-[#1f1f1f] transition hover:text-green-700"
          >
            About
          </Link>

          <Link
            href="/blog"
            className="flex items-center gap-1 text-[17px] font-medium text-[#1f1f1f] transition hover:text-green-700"
          >
            Insights
          </Link>

          <Link
            href="/contact"
            className="text-[17px] font-medium text-[#1f1f1f] transition hover:text-green-700"
          >
            Contact
          </Link>

          <Link
            href="/book_a_demo"
            className="text-[17px] font-medium text-white bg-[#004B2D]  hover:text-white rounded-full px-5 py-2.5 transition"
          >
            Book a Free Demo
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center justify-center rounded-md p-2 text-black lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <TextAlignEnd size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? "max-h-[500px] border-t border-black/10" : "max-h-0"
        } ${isScrolled ? "bg-white" : "bg-red-100"}`}
      >
        <nav className="flex flex-col px-4 py-4 sm:px-6">
          <Link
            href="/"
            className="border-b border-black/10 py-3 text-base font-medium text-[#1f1f1f]"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="border-b border-black/10 py-3 text-base font-medium text-[#1f1f1f]"
          >
            Services
          </Link>
          <Link
            href="/projects"
            className="border-b border-black/10 py-3 text-base font-medium text-[#1f1f1f]"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="border-b border-black/10 py-3 text-base font-medium text-[#1f1f1f]"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="border-b border-black/10 py-3 text-base font-medium text-[#1f1f1f]"
          >
            Insights
          </Link>
          <Link
            href="/contact"
            className="py-3 text-base font-medium text-[#1f1f1f]"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
