import React from "react";
import logo from "../../assets/housify.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer w-full rounded-t-[90px] md:rounded-t-[120px] bg-purple-900">
      <div className="max-w-[1440px] mx-auto pt-10 md:pt-20 pb-5 px-10 flex-col justify-between text-center md:text-left md:grid grid-cols-4 gap-12">
        {/* footer header */}
        <div className="col-span-2 pt-10 md:pt-0">
          <h2>Do You Have Questions With Anything?</h2>
          <p className="py-6 text-xl">
            Receive Updates, discount rates, expert services, payment details,
            tutorials sent direct to your inbox.
          </p>
          <div>
            <form className="relative" method="Post" action="">
              <input
                type={"email"}
                value={""}
                className="email rounded-full py-4 px-6 w-full text-black"
                placeholder="Enter email"
              />
              <button className="absolute right-0 rounded-full py-4 px-6 bg-pink-700 hover:bg-purple-700">
                Subscribe
              </button>
            </form>
          </div>
          <div className="flex flex-col md:flex-row justify-between py-10 items-center">
            {/* brand logo goes to top on clic */}
            <div className="">
              <a className="" href="#">
                <img className="h-8 w-70" src={logo} alt="Housify Logo" />
              </a>
            </div>
            {/* media icons */}
            <div className="flex flex-row py-8 md:py-0">
              <div className="px-2 text-[40px] hover:scale-125 duration-300">
                <FaFacebook />
              </div>
              <div className="px-2 text-[40px] hover:scale-125 duration-300">
                <FaInstagram />
              </div>
              <div className="px-2 text-[40px] hover:scale-125 duration-300">
                <FaLinkedin />
              </div>
              <div className="px-2 text-[40px] hover:scale-125 duration-300">
                <FaFacebook />
              </div>
            </div>
          </div>
        </div>

        {/* footer links */}
        <div className=" col-span-1 md:ml-20">
          <h3>Links</h3>
          <div className="py-4 text-xl">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-2xl" : "block hover:scale-110 duration-300 p-3"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-2xl" : "block hover:scale-110 duration-300 p-3"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/property"
              className={({ isActive }) =>
                isActive ? "text-2xl" : "block hover:scale-110 duration-300 p-3"
              }
            >
              Property
            </NavLink>
            <NavLink
              to="/agent"
              className={({ isActive }) =>
                isActive ? "text-2xl" : "block hover:scale-110 duration-300 p-3"
              }
            >
              Agent
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-2xl"
                  : "block hover:scale-110 duration-300  p-3"
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "text-2xl"
                  : "block hover:scale-110 duration-300  p-3"
              }
            >
              Blog
            </NavLink>
          </div>
        </div>

        {/* Blog */}
        <div className="col-span-1 pt-8 md:pt-0">
          <h3>Blog</h3>
        </div>
      </div>

      <div className="text-center py-6">
        <p>Copyright Housify 2022</p>
      </div>
    </div>
  );
}

export default Footer;