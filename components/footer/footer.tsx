"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E5B] text-orange-400">
      <div className="grid grid-cols-1 gap-8 p-6 sm:p-10 lg:grid-cols-6 lg:gap-10 lg:p-20">
        <div className="flex justify-center lg:justify-start">
          <a href="/" className="block">
            <span className="sr-only">Home</span>
            <Image src="/menubar/logo.png" height={60} width={180} alt="logo" />
          </a>
        </div>
        <div>
          <p className="font-bold text-orange-400 mt-3">Company</p>
          <ul className="mt-4 space-y-2 sm:space-y-4 text-sm">
            {["About", "Our Partner", "Privacy Policy", "T&C", "Blog", "Promotions", "Affiliate Program"].map(item => (
              <li key={item}>
                <a href="#" className="text-gray-300 transition hover:opacity-75">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-bold text-orange-400 mt-3">Booking</p>
          <ul className="mt-4 space-y-2 sm:space-y-4 text-sm">
            {["Flights", "Hotels", "Packages", "Transportation", "Special Deals"].map(item => (
              <li key={item}>
                <a href="#" className="text-gray-300 transition hover:opacity-75">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-bold text-orange-400 mt-3">Services</p>
          <ul className="mt-4 space-y-2 sm:space-y-4 text-sm">
            {["Help", "1800-100-767-00", "info@tripbeyond.com"].map((item, index) => (
              <li key={index}>
                <a
                  href={index === 1 ? "tel:180010076700" : "mailto:info@tripbeyond.com"}
                  className="text-gray-300 transition hover:opacity-75"
                >
                  {item}
                </a>
              </li>
            ))}
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
            <li className="flex gap-4">
              {["Facebook", "Twitter", "Instagram"].map((platform, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-300 transition hover:opacity-75"
                  aria-label={platform}
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {platform === "Facebook" && (
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    )}
                    {platform === "Twitter" && (
                      <path d="M22.46 6.011c-.798.355-1.657.593-2.56.699a4.528 4.528 0 001.98-2.494 9.053 9.053 0 01-2.87 1.096 4.508 4.508 0 00-7.692 4.106A12.794 12.794 0 013.15 4.18a4.507 4.507 0 001.398 6.012A4.484 4.484 0 012.8 9.86v.056a4.507 4.507 0 003.617 4.421 4.506 4.506 0 01-2.035.077 4.508 4.508 0 004.212 3.128A9.041 9.041 0 012 19.54a12.758 12.758 0 006.927 2.032c8.313 0 12.854-6.88 12.854-12.844 0-.196-.004-.392-.013-.588A9.186 9.186 0 0024 6.793a9.037 9.037 0 01-2.54.697z" />
                    )}
                    {platform === "Instagram" && (
                      <path
                        fillRule="evenodd"
                        d="M12 2.163c3.204 0 3.584.012 4.849.07 1.17.056 1.97.24 2.438.396a4.914 4.914 0 011.795 1.095 4.914 4.914 0 011.095 1.796c.155.468.34 1.268.396 2.438.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.056 1.17-.24 1.97-.396 2.438a4.914 4.914 0 01-1.095 1.795 4.914 4.914 0 01-1.796 1.095c-.468.155-1.268.34-2.438.396-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.17-.056-1.97-.24-2.438-.396a4.914 4.914 0 01-1.795-1.095 4.914 4.914 0 01-1.095-1.796c-.155-.468-.34-1.268-.396-2.438-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.056-1.17.24-1.97.396-2.438a4.914 4.914 0 011.095-1.796 4.914 4.914 0 011.796-1.095c.468-.155 1.268-.34 2.438-.396C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.765 0 8.355.015 7.091.072 5.77.128 4.654.304 3.674.552a7.086 7.086 0 00-2.621 1.593A7.086 7.086 0 00.452 4.767c-.248.98-.424 2.096-.481 3.417C0 8.355 0 8.765 0 12c0 3.235.015 3.645.072 4.909.057 1.321.233 2.437.481 3.417a7.086 7.086 0 001.593 2.621 7.086 7.086 0 002.621 1.593c.98.248 2.096.424 3.417.481 1.264.057 1.674.072 4.909.072 3.235 0 3.645-.015 4.909-.072 1.321-.057 2.437-.233 3.417-.481a7.086 7.086 0 002.621-1.593 7.086 7.086 0 001.593-2.621c.248-.98.424-2.096.481-3.417.057-1.264.072-1.674.072-4.909 0-3.235-.015-3.645-.072-4.909-.057-1.321-.233-2.437-.481-3.417a7.086 7.086 0 00-1.593-2.621 7.086 7.086 0 00-2.621-1.593c-.98-.248-2.096-.424-3.417-.481C15.645 0 15.235 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.324a4.162 4.162 0 110-8.324 4.162 4.162 0 010 8.324zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"
                        clipRule="evenodd"
                      />
                    )}
                  </svg>
                </a>
              ))}
            </li>
            <li>
              <a href="#" className="text-gray-300 transition hover:opacity-75">
                Newsletter
              </a>
              <div className="flex mt-2">
                <Input className="w-[150px] sm:w-[200px]" placeholder="Email ID" />
                <Button
                  className="rounded-full bg-[#FF9C00] hover:bg-orange-500/90 active:border-b-0 text-black px-3 sm:px-4 py-2 ml-2"
                  variant="custom"
                >
                  Subscribe
                </Button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#141449] py-4 text-center text-xs">
        <p>&copy; 2023 TripBeyond. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
