"use client";

import { Mail, Phone, MapPin, SendIcon } from "lucide-react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative text-white">

      {/* Footer Content */}
      <div className="px-4 sm:px-6 lg:px-8 bg-[#0b3d2e] ">
        <div className="mx-auto max-w-7xl pt-32 sm:pt-46 lg:pt-30">
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Logo + About */}
          <div>
            <div className="mb-4 flex items-center justify-start">
              <Image
                src="/logo_transparent.png"
                width={70}
                height={70}
                alt="Weboraz logo"
                className="h-auto w-14 sm:w-[70px]"
              />
              <h2 className="text-2xl font-bold sm:text-3xl">Weboraz</h2>
            </div>

            <p className="mb-5 max-w-sm text-sm leading-7 text-gray-300 sm:text-base">
              A digital agency specializes in creating online strategies for
              businesses to optimize
            </p>

            <div className="flex flex-wrap gap-3">
              <FaFacebookF className="rounded-full bg-white/10 p-2 text-[34px] cursor-pointer transition hover:bg-white/20" />
              <FaTwitter className="rounded-full bg-white/10 p-2 text-[34px] cursor-pointer transition hover:bg-white/20" />
              <FaInstagram className="rounded-full bg-white/10 p-2 text-[34px] cursor-pointer transition hover:bg-white/20" />
              <FaLinkedinIn className="rounded-full bg-white/10 p-2 text-[34px] cursor-pointer transition hover:bg-white/20" />
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-xl font-semibold sm:text-2xl">Links</h3>
            <ul className="space-y-3 text-sm text-gray-300 sm:text-base">
              <li className="cursor-pointer hover:text-white">Home</li>
              <li className="cursor-pointer hover:text-white">About</li>
              <li className="cursor-pointer hover:text-white">Portfolio</li>
              <li className="cursor-pointer hover:text-white">Blog</li>
              <li className="cursor-pointer hover:text-white">Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xl font-semibold sm:text-2xl">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-300 sm:text-base">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0" />
                <span>66 Broklyant, India</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0" />
                <span>012 345 678 9101</span>
              </li>

              <li className="flex items-center gap-3 break-all">
                <Mail size={18} className="shrink-0" />
                <span>abcd@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-xl font-semibold sm:text-2xl">Services</h3>
            <ul className="space-y-3 text-sm text-gray-300 sm:text-base">
              <li>WebSavvy Solutions</li>
              <li>SocialSphere</li>
              <li>SEO Wizardry</li>
              <li>Digital Dreams Agency</li>
              <li>Brand Brilliance</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 py-5">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-sm text-gray-300 md:flex-row md:text-left">
            <p className="text-sm sm:text-base">
              © Webvibe 2025 | All Rights Reserved
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-sm sm:text-base">
              <span className="cursor-pointer hover:text-white">
                Terms & Condition
              </span>
              <span className="cursor-pointer hover:text-white">
                Privacy Policy
              </span>
              <span className="cursor-pointer hover:text-white">
                Contact Us
              </span>
            </div>
          </div>
        </div>
      </div></div>


       <div className="absolute left-1/2  -top-10 w-full max-w-6xl -translate-x-1/2 -translate-y-1/2 px-6 sm:px-10 lg:px-16">
        <div className="rounded-2xl bg-white px-5 py-6 shadow-xl sm:px-8 sm:py-8 lg:px-12 lg:py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <h2 className="max-w-2xl text-2xl font-medium leading-snug text-black sm:text-3xl lg:text-4xl xl:text-[45px]">
              Get Latest Update Subscribe to Our Newsletter
            </h2>

            <div className="w-full max-w-xl space-y-3">
              <div className="flex items-center rounded-full border-2 border-gray-200 bg-white px-4 py-3 sm:px-5 sm:py-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent text-sm text-gray-600 outline-none sm:text-base"
                />
                <SendIcon size={18} className="shrink-0 text-gray-500" />
              </div>

              <button className="flex w-full items-center justify-center gap-2 rounded-full bg-[#FFEB69] px-6 py-3 font-medium text-black transition hover:bg-yellow-500 sm:py-4">
                Subscribe →
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}