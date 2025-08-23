"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Example auth state

  const handleLogout = () => {
    setIsLoggedIn(false);
    // You can add real logout logic here (e.g., NextAuth signOut())
  };

  const navLinks = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/allproduct">Product List</Link>
      </li>
      <li>
        <Link href="/addproduct">Add Product</Link>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="navbar w-11/12 mx-auto text-black">
        {/* Left Section */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 font-bold text-lg shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
              <li className="mt-2 flex gap-2">
                {!isLoggedIn ? (
                  <>
                    <Link href="/signIn" className="btn btn-sm btn-success">
                      SignIn
                    </Link>
                    <Link href="/signUp" className="btn btn-sm btn-primary">
                      SignUp
                    </Link>
                  </>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="btn btn-sm btn-error w-full"
                  >
                    Logout
                  </button>
                )}
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="btn btn-ghost normal-case text-xl font-bold"
          >
            🚴‍♂️ CycleShop
          </Link>
        </div>

        {/* Center Section (Desktop Menu) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-lg">
            {navLinks}
          </ul>
        </div>

        {/* Right Section (Desktop Auth Buttons) */}
        <div className="navbar-end hidden lg:flex gap-2">
          {!isLoggedIn ? (
            <>
              <Link href="/signin" className="btn btn-success">
                SignIn
              </Link>
              <Link href="/signup" className="btn btn-primary">
                SignUp
              </Link>
            </>
          ) : (
            <button onClick={handleLogout} className="btn btn-error">
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
