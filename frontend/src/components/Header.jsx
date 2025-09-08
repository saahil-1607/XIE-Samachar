import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

function Header() {
  const isLoggedIn = false;
  const navItems = [
    {
      name: "Home",
      url: "/",
      active: true,
    },
    {
      name: "Departments",
      url: "/departments",
      active: !isLoggedIn,
    },
    {
      name: "Login",
      url: "/login",
      active: !isLoggedIn,
    },
    {
      name: "Add Newsletter",
      url: "/add-newsletter",
      active: isLoggedIn,
    },
  ];

  return (
    <header className="py-3 shadow-xl bg-gray-600 top-0 sticky">
      <div className="w-full max-w-7xl mx-auto px-4">
        <nav className="flex mx-4">
          <Link to="/" className="flex items-center space-x-3">
            <img src={Logo} alt="Logo" className="h-15" />
            <h3 className="text-white font-bold font-serif text-2xl">
              XIE Samachar
            </h3>
          </Link>
          <ul className="flex ml-auto items-center text-white">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <Link
                    to={item.url}
                    className="inline-block px-4 py-2 duration-200 hover:bg-gray-900 rounded-full font-medium text-center"
                  >
                    {item.name}
                  </Link>
                </li>
              ) : null
            )}
            {isLoggedIn && (
              <li>
                <button className="inline-block px-4 py-2 duration-200 hover:bg-red-800 rounded-full font-medium text-center cursor-pointer">
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
