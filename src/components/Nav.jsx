import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import ThemeToggle from "./ThemeToggle";
import Wrapper from "./Wrapper";
import { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const togglehandler = () => setToggle((prevToggle) => !prevToggle);

  return (
    <nav className="relative">
      <Wrapper classes="flex items-center justify-between py-6">
        <Link to="/">
          <h1 className="font-bold text-2xl sm:text-3xl">Cryptobase</h1>
        </Link>
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
        <div className="hidden md:block space-x-4">
          <Link
            to="/sign-in"
            className="text-lg font-semibold hover:text-accent smooth
          "
          >
            Sign In
          </Link>
          <Link
            to="/sign-up"
            className="bg-button text-btnText p-2 rounded-xl text-lg font-semibold hover:opacity-80 smooth"
          >
            Sign Up
          </Link>
        </div>
        {/* Mobile Menu Toggle */}
        <button className="block md:hidden text-2xl" onClick={togglehandler}>
          {toggle ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
        {/* Mobile Menu */}

        <div
          className={`${
            toggle ? "fixed left-0 z-10" : "fixed left-[-100%]"
          } flex flex-col items-center gap-8 w-full h-[90%] bg-primary ease-in duration-300 top-20 z-0 md:hidden`}
        >
          <ul className="w-full p-4">
            <li className="border-b py-6">
              <Link to="/" className="text-lg font-semibold">
                Home
              </Link>
            </li>
            <li className="border-b py-6">
              <Link to="/account" className="text-lg font-semibold">
                Account
              </Link>
            </li>
            <li className="py-6">
              <ThemeToggle />
            </li>
          </ul>
          <div className="w-full flex flex-col p-4 gap-4">
            <Link
              to="/sign-in"
              className="w-full p-3 bg-primary text-primary border border-secondary text-lg font-semibold rounded-2xl shadow-xl text-center hover:opacity-70 smooth"
            >
              Sign In
            </Link>
            <Link
              to="/sign-up"
              className="bg-button text-btnText p-3 rounded-2xl shadow-xl text-lg font-semibold hover:opacity-80 smooth text-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </Wrapper>
    </nav>
  );
};

export default Nav;
