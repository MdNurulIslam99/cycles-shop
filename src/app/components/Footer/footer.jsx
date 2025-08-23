"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-10">
      <div className="w-11/12 mx-auto footer p-10 flex flex-col md:flex-row justify-between">
        {/* Brand Section */}
        <aside>
          <Link href="/" className="text-2xl font-bold flex items-center gap-2">
            🚴‍♂️ CycleShop
          </Link>
          <p className="mt-2 text-sm text-gray-500">
            Your trusted bicycle store since 2025. <br />
            Quality bikes & accessories for every rider.
          </p>
        </aside>

        {/* Navigation Links */}
        <nav>
          <header className="footer-title">Links</header>
          <Link href="/" className="link link-hover">
            Home
          </Link>
          <Link href="/addproduct" className="link link-hover">
            Add Product
          </Link>
          <Link href="/allproduct" className="link link-hover">
            Product List
          </Link>
        </nav>

        {/* Social Media */}
        <nav>
          <header className="footer-title">Follow Us</header>
          <div className="flex gap-4 text-lg">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="hover:text-blue-600"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="hover:text-sky-500"
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-blue-700"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </nav>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-300 py-4 text-center text-sm">
        © {new Date().getFullYear()} CycleShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
