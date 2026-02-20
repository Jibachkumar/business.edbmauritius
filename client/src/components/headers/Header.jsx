import { useState } from "react";
import {
  FaHome,
  FaFileAlt,
  FaSearch,
  FaNewspaper,
  FaInfoCircle,
  FaTimes,
  FaChevronRight,
  FaChevronDown,
} from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

function NavItem({ icon, label, to, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({
        isActive,
      }) => `flex items-center text-[15px] text-[#3a7ab5] font-normal gap-x-2 cursor-pointer pb-2 lg:px-[48px] md:px-5
        ${
          isActive ? "border-b-6 border-[#3a7ab5]" : " hover:hover:bg-slate-200"
        }`}
    >
      <span className="text-[17px] py-2">{icon}</span>
      <span className="py-2">{label}</span>

      {/* RIGHT SIDE: arrow icon (THIS WAS MISSING) */}
      <FaChevronRight className="text-[#3a7ab5] text-sm absolute right-8 md:hidden" />
    </NavLink>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchIcon, setSearchIcon] = useState(false);
  return (
    <header className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-6xl border-b border-slate-200 mx-auto px-2 py-2 flex items-center justify-between relative">
        <div className="flex w-full items-center justify-center sm:justify-start gap-3">
          <div className="h-[60px] flex justify-center">
            <img
              src="https://business.edbmauritius.org/wps/wcm/connect/business/16d6872a-d40e-4e5b-a460-b9d792829d93/Coat+of+Arms+of+Mauritius.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_IA161OC0OOVAC0Q4TMNE2N3G33-16d6872a-d40e-4e5b-a460-b9d792829d93-mqNcSNq"
              alt="logo"
              className="object-cover"
            />
          </div>

          <h1 className="hidden lg:block text-slate-900 lg:mx-auto text-sm lg:text-[15px] leading-tight">
            Mauritius Business Licensing Platform
          </h1>
        </div>

        <div className="flex items-center gap-3">
          {/* 🔍 Mobile-only search icon */}
          <button className="md:hidden p-2 absolute right-4 rounded-full hover:bg-gray-200">
            <FaSearch
              onClick={() => setSearchIcon(!searchIcon)}
              className="text-[#3a7ab5] text-2xl"
            />
          </button>

          {/* 💻 Desktop content */}
          <div className="hidden md:flex items-center gap-3">
            {/* Search box */}
            <div className="relative w-full">
              <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />

              <input
                type="text"
                placeholder="Search"
                className="w-[260px] bg-gray-50 border border-slate-300 rounded-sm pl-10 pr-3 py-2 text-sm focus:outline-none"
              />
            </div>

            {/* Buttons */}
            <Link to="/register">
              <button className="px-3 py-1.5 text-[#3a7ab5] text-[14px] hover:bg-[#3a7ab5] hover:text-white">
                REGISTER
              </button>
            </Link>
            <Link to="/login">
              <button className="text-[#3a7ab5] px-3 py-1.5 text-[14px] hover:bg-[#3a7ab5] hover:text-white">
                LOGIN
              </button>
            </Link>
          </div>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-[#3a7ab5] absolute left-4"
        >
          <BsThreeDotsVertical />
        </button>
      </div>

      {/* ================= DESKTOP NAV (UNCHANGED) ================= */}
      <nav className={`hidden md:block`}>
        <div className="max-w-5xl mx-auto px-1 flex flex-col md:flex-row md:items-center gap-3 text-sm">
          <NavItem to="/" icon={<FaHome />} label="Home" />
          <NavItem to="/licensing" icon={<FaFileAlt />} label="Licensing" />
          <NavItem
            to="/searchpermits"
            icon={<FaSearch />}
            label="Search Permits"
          />
          <NavItem to="/news" icon={<FaNewspaper />} label="News" />
          <NavItem to="/faqs" icon={<FaInfoCircle />} label="FAQ's & Notices" />
        </div>
      </nav>

      {/* ================= FULL SCREEN MOBILE MENU (NEW) ================= */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          {/* TOP BAR */}
          <div className="flex items-center justify-between px-4 py-3">
            {/* ❌ CLOSE BUTTON */}
            <button onClick={() => setMenuOpen(false)}>
              <i className="fa-regular fa-circle-xmark text-2xl text-[#3a7ab5]"></i>
            </button>

            {/* LOGO */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE0X-g0cYfQ2eaW9M9q7pzvhyWbKJ7gEu4Xg&s"
              alt="logo"
              className="w-14 h-14"
            />

            {/* SEARCH ICON */}
            <FaSearch className="text-2xl text-[#3a7ab5]" />
          </div>

          {/* MOBILE NAV ITEMS */}
          <div className="flex flex-col mt-4 px-4">
            <div className="border-b border-[#3a7ab5]">
              <NavItem
                to="/"
                icon={<FaHome />}
                label="Home"
                onClick={() => setMenuOpen(false)}
              />
            </div>
            <div className="border-b border-[#3a7ab5]">
              <NavItem
                to="/licensing"
                icon={<FaFileAlt />}
                label="Licensing"
                onClick={() => setMenuOpen(false)}
              />
            </div>
            <div className="border-b border-[#3a7ab5]">
              <NavItem
                to="/searchpermits"
                icon={<FaSearch />}
                label="Search Permits"
                onClick={() => setMenuOpen(false)}
              />
            </div>
            <div className="border-b border-[#3a7ab5]">
              <NavItem
                to="/news"
                icon={<FaNewspaper />}
                label="News"
                onClick={() => setMenuOpen(false)}
              />
            </div>
            <div className="border-b border-[#3a7ab5]">
              <NavItem
                to="/faqs"
                icon={<FaInfoCircle />}
                label="FAQ's & Notices"
                onClick={() => setMenuOpen(false)}
              />
            </div>

            {/* AUTH BUTTONS */}
            <div>
              <Link to="/register">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-left px-5 py-3 text-[#3a7ab5] border-b border-[#3a7ab5] hover:bg-slate-200"
                >
                  REGISTER
                </button>
              </Link>
              <Link to="/login">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-left px-5 py-3 text-[#3a7ab5] border-b border-[#3a7ab5] hover:bg-slate-200"
                >
                  LOGIN
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* mobile search input */}
      {searchIcon && (
        <input
          type="text"
          className="w-full my-4 mt-6 bg-gray-50 border border-slate-300 rounded-sm pl-10 pr-3 py-2 text-sm focus:outline-none"
        />
      )}
    </header>
  );
}

export default Header;
