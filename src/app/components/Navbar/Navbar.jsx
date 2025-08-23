"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { toast, Toaster } from "react-hot-toast";

const Navbar = () => {
  const { data: session, status } = useSession();

  const handleLogout = async () => {
    await signOut({ redirect: false });
    toast.success("Logged out successfully!", { position: "top-right" });
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
    <>
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
                <li className="mt-2 flex gap-2 rounded-lg">
                  {status === "authenticated" ? (
                    <button
                      onClick={handleLogout}
                      className="btn btn-sm btn-error  w-full"
                    >
                      Logout
                    </button>
                  ) : (
                    <>
                      <Link
                        href="/signin"
                        className="btn btn-sm btn-success rounded-lg"
                      >
                        SignIn
                      </Link>
                      <Link
                        href="/signup"
                        className="btn btn-sm btn-primary rounded-lg"
                      >
                        SignUp
                      </Link>
                    </>
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
            {status === "authenticated" ? (
              <button onClick={handleLogout} className="btn btn-error">
                Logout
              </button>
            ) : (
              <>
                <Link href="/signin" className="btn btn-success">
                  SignIn
                </Link>
                <Link href="/signup" className="btn btn-primary">
                  SignUp
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Toast container */}
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </>
  );
};

export default Navbar;
