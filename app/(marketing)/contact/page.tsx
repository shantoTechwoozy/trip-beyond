"use client";
import React from "react";
import Image from "next/image";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center  p-8">
      <div className="bg-white rounded-lg shadow-2xl p-10 max-w-lg w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mt-4">Contact Us</h1>
          <p className="text-gray-600 mt-2">
            We are here to help you with your bookings!
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center">
            <FaEnvelope className="text-blue-600 w-6 h-6 mr-3" />
            <a
              href="mailto:support@tripbeyond.com"
              className="text-blue-700 hover:text-blue-800 font-medium"
            >
              support@tripbeyond.com
            </a>
          </div>

          <div className="flex items-center">
            <FaPhoneAlt className="text-blue-600 w-6 h-6 mr-3" />
            <a
              href="tel:+1234567890"
              className="text-blue-700 hover:text-blue-800 font-medium"
            >
              +1 (234) 567-890
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold text-gray-800">Support Team</h2>
          <p className="text-gray-600 mt-2">
            Our support team is available 24/7 to assist you with your travel
            needs.
          </p>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => (window.location.href = "tel:+1234567890")}
            className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Call Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
