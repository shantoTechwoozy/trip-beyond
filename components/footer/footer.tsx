"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FiFacebook } from "react-icons/fi";
import { TfiTwitter } from "react-icons/tfi";
import { TfiInstagram } from "react-icons/tfi";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
  
  return (
    <footer className="bg-[#1e2755] text-orange-400">
      <div className="grid grid-cols-1 gap-8 p-6 sm:p-10 lg:grid-cols-6 lg:gap-10 lg:p-16">
        <div className="flex justify-center lg:justify-start">
          <a href="/" className="block">
            <span className="sr-only">Home</span>
            <Image src="/menubar/logo.png" height={60} width={180} alt="logo" />
          </a>
        </div>
        <div>
          <p className="font-bold text-orange-400 mt-3">Company</p>
          <ul className="mt-4 space-y-2 sm:space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-300 transition hover:opacity-75">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 transition hover:opacity-75">
                Our Partner
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 transition hover:opacity-75">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 transition hover:opacity-75">
                T&C
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 transition hover:opacity-75">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 transition hover:opacity-75">
                Promotions
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 transition hover:opacity-75">
                Affiliate Program
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-orange-400 mt-3">Booking</p>
          <ul className="mt-4 space-y-2 sm:space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-300 transition hover:opacity-75">
                Flights
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 transition hover:opacity-75">
                Hotels
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 transition hover:opacity-75">
                Packages
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 transition hover:opacity-75">
                Transportation
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 transition hover:opacity-75">
                Special Deals
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-orange-400 mt-3">Services</p>
          <ul className="mt-4 space-y-2 sm:space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-300 transition hover:opacity-75">
                Help
              </a>
            </li>
            <li>
              <a
                href="tel:180010076700"
                className="text-gray-300 transition hover:opacity-75"
              >
                1800-100-767-00
              </a>
            </li>
            <li>
              <a
                href="mailto:info@tripbeyond.com"
                className="text-gray-300 transition hover:opacity-75"
              >
                info@tripbeyond.com
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 transition hover:opacity-75"
              >
                We accept :
                <Image
                  src="/footer/payment-method.png"
                  height={60}
                  width={180}
                  alt="logo"
                  className="-ml-2"
                />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-orange-400 mt-3">Connect with Us</p>
          <ul className="mt-4 space-y-2 sm:space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-300 transition hover:opacity-75">
                Social Media
              </a>
            </li>
            <li className="flex flex-wrap gap-4">
              <a
                href="#"
                className="text-gray-300 transition hover:opacity-75"
                aria-label="Facebook"
              >
                <FiFacebook className="text-gray-300 transition hover:opacity-75 h-7 w-7" />
              </a>
              <a
                href="#"
                className="text-gray-300 transition hover:opacity-75"
                aria-label="Twitter"
              >
                <TfiTwitter className="text-gray-300 transition hover:opacity-75 h-7 w-7" />
              </a>
              <a
                href="#"
                className="text-gray-300 transition hover:opacity-75"
                aria-label="Instagram"
              >
                <TfiInstagram className="text-gray-300 transition hover:opacity-75 h-7 w-7" />
              </a>
              <a
                href="#"
                className="text-gray-300 transition hover:opacity-75"
                aria-label="LinkedIn"
              >
                <SlSocialLinkedin className="text-gray-300 transition hover:opacity-75 h-7 w-7" />
              </a>
              <a
                href="#"
                className="text-gray-300 transition hover:opacity-75"
                aria-label="YouTube"
              >
                <CiYoutube className="text-gray-300 transition hover:opacity-75 h-7 w-7" />
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 transition hover:opacity-75">
                Newsletter
              </a>
              <div className="flex flex-col sm:flex-row mt-2">
                <Input
                  className="w-full sm:w-auto sm:flex-1"
                  placeholder="Email ID"
                />
                <Button
                  className="mt-2 sm:mt-0 sm:ml-2 rounded-full bg-[#FF9C00] hover:bg-orange-500/90 active:border-b-0 text-black px-3 sm:px-4 py-2"
                  variant="custom"
                >
                  Subscribe
                </Button>
              </div>
            </li>
            <li className="w-full sm:w-[400px]">
              <a
                href="mailto:info@tripbeyond.com"
                className="text-gray-300 transition hover:opacity-75"
              >
                <Image
                  src="/footer/ava.png"
                  height={240}
                  width={720}
                  alt="logo"
                  className="h-32 w-full"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#1e2755] py-4 text-center text-xs">
        <p>&copy; 2023 TripBeyond. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
