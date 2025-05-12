import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { IoClose } from "react-icons/io5";
import offCanvasBG from "../assets/offCanvasBg.png";

const Navbar = () => {
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect Scroll to Change Navbar Style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Courses", path: "/courses" },
    { name: "Services", path: "/services" },
    { name: "Success Story", path: "/success" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    document.getElementById("my-drawer-3").checked = false;
  };

  const links = (
    <>
      {navLinks.map((link, index) => (
        <li
          key={index}
          onClick={handleCloseDrawer}
          className={index === navLinks.length - 1 ? "mr-0" : ""}
        >
          <Link
            to={link.path}
            className={`py-4 px-4 lg:py-2 rounded-lg transition duration-300 ${
              location.pathname === link.path
                ? "text-red-600 font-semibold"
                : "text-blue-400"
            } hover:text-red-500`}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <div className="align-center sticky top-0 z-50">
      <div className="drawer">
        <input
          id="my-drawer-3"
          type="checkbox"
          className="drawer-toggle"
          onChange={(e) => setIsDrawerOpen(e.target.checked)}
        />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div
            className={`navbar px-[5%] w-full bg-white  transition-all duration-300 ${
              isScrolled ? "bg-white shadow-md" : "bg-transparent"
            }`}
          >
            {/* Mobile Menu Button */}
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost text-blue-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            {/* Logo */}
            <div className="flex-1">
              <Link to="/">
                <img src={logo} alt="Logo" className="h-12" />
              </Link>
            </div>

            {/* Desktop Navbar */}
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal text-blue-400 pe-0">
                {links}
              </ul>
            </div>
          </div>
        </div>

        {/* Sidebar (Mobile Navigation) */}
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div
            className="relative w-80 min-h-full p-4 text-blue-400 bg-cover bg-top"
            style={{ backgroundImage: `url(${offCanvasBG})` }}
          >
            {/* Close Button */}
            <div className="flex-1">
              <Link to="/">
                <img src={logo} alt="Logo" className="h-12 ms-5" />
              </Link>
            </div>
            <button
              className="absolute top-6 right-4 text-white bg-red-500 hover:bg-red-700 px-3 py-1 rounded-lg"
              onClick={handleCloseDrawer}
            >
              <IoClose className="text-xl" />
            </button>

            {/* Menu Items */}
            <ul className="menu">{links}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
