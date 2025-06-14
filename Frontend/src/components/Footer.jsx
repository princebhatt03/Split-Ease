import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import logo from '../assets/images/logoD.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 bottom-0 absolute w-full text-white px-6 py-10 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={logo}
            alt="SplitEase Logo"
            className="h-48 mb-0"
          />
          <p className="text-gray-400">
            Simplify your shared expenses. Track, split, and settle with ease.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            {['Dashboard', 'Expenses', 'Users', 'Settlements'].map(
              (link, idx) => (
                <li
                  key={idx}
                  className="hover:text-white transition duration-300 cursor-pointer">
                  {link}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="bg-gray-700 hover:bg-white hover:text-gray-900 p-2 rounded-full transition duration-300">
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} SplitEase. All rights reserved. <br />
        Developed with ❤️ by Prince Bhatt
      </div>
    </footer>
  );
};

export default Footer;
