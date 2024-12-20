import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
        {/* Footer Title */}
        <h2 className="text-2xl font-bold text-white tracking-wide">
          User Directory
        </h2>

        {/* Divider */}
        <div className="w-1/3 md:w-1/4 mx-auto h-0.5 bg-gradient-to-r from-yellow-400 to-pink-500"></div>

        {/* Social Media Links */}
        <div className="flex justify-center flex-wrap gap-4 mt-4">
          <a
            href="#"
            className="hover:text-blue-400 transition duration-300 transform hover:scale-110"
          >
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a
            href="#"
            className="hover:text-blue-300 transition duration-300 transform hover:scale-110"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a
            href="#"
            className="hover:text-pink-500 transition duration-300 transform hover:scale-110"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a
            href="#"
            className="hover:text-blue-600 transition duration-300 transform hover:scale-110"
          >
            <i className="fab fa-linkedin-in text-2xl"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} User Directory. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm">
          Made with <span className="text-red-500 text-2xl">&hearts;</span> by Vidushi Bhatt
        </p>
      </div>
    </footer>
  );
};

export default Footer;
