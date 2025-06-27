import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart, FaSignInAlt, FaStore } from "react-icons/fa";
import { Badge } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";
import { useSelector } from "react-redux";
import UserMenu from "../UserMenu";

const Navbar = () => {
  const path = useLocation().pathname;
  const [navbarOpen, setNavBarOpen] = useState(false);
  const { cart } = useSelector((state) => state.carts);
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="h-[70px] bg-gradient-to-r from-blue-600 to-indigo-600 text-white z-50 flex items-center sticky top-0">
      <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center text-2xl font-bold">
          <FaStore className="mr-2 text-3xl" />
          <span className="font-[sans-serif]">E-Shop</span>
        </Link>

        {/* Nav links (responsive) */}
        <ul
          className={`flex sm:gap-10 gap-4 sm:items-center sm:static absolute left-0 top-[70px] sm:shadow-none shadow-md ${
            navbarOpen ? "h-fit sm:pb-0 pb-5" : "h-0 overflow-hidden"
          } transition-all duration-200 sm:h-fit bg-gradient-to-r from-blue-600 to-indigo-600 text-white sm:w-fit w-full sm:flex-row flex-col px-4 sm:px-0`}
        >
          <li>
            <Link
              to="/"
              className={`font-[500] transition-all duration-150 ${
                path === "/" ? "text-white font-semibold" : "text-gray-200"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className={`font-[500] transition-all duration-150 ${
                path === "/products" ? "text-white font-semibold" : "text-gray-200"
              }`}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`font-[500] transition-all duration-150 ${
                path === "/about" ? "text-white font-semibold" : "text-gray-200"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`font-[500] transition-all duration-150 ${
                path === "/contact" ? "text-white font-semibold" : "text-gray-200"
              }`}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className={`font-[500] transition-all duration-150 ${
                path === "/cart" ? "text-white font-semibold" : "text-gray-200"
              }`}
            >
              <Badge
                showZero
                badgeContent={cart?.length || 0}
                color="primary"
                overlap="circular"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <FaShoppingCart size={25} />
              </Badge>
            </Link>
          </li>

          {(user && user.id) ? (
            <li className="font-[500] transition-all duration-150">
              <UserMenu/>
            </li>
          ) : (
            <li className="font-[500] transition-all duration-150">
              <Link
                to="/login"
                className="flex items-center space-x-2 px-4 py-[6px] bg-gradient-to-r from-purple-600 to-red-500
                  text-white font-semibold rounded-md shadow-lg hover:from-purple-500 hover:to-red-400 transition duration-300 ease-in-out transform"
              >
                <FaSignInAlt />
                <span>Login</span>
              </Link>
          </li>
          )}
          

        </ul>

        {/* Hamburger Menu Toggle Button */}
        <button
          onClick={() => setNavBarOpen(!navbarOpen)}
          className="sm:hidden flex items-center"
        >
          {navbarOpen ? (
            <RxCross2 className="text-white text-3xl" />
          ) : (
            <IoIosMenu className="text-white text-3xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;


