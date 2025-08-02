"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/Sanitarywares.png";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const menu = [
    { id: 1, name: "Home", route: "/home" },
    {
      id: 2,
      name: "Products",
      route: "/products",
      subMenu: [
        { name: "Faucets", route: "/products/faucets" },
        { name: "Sanitaryware", route: "/products/sanitaryware" },
        { name: "Showers", route: "/products/showers" },
        { name: "Sinks", route: "/products/sinks" },
        { name: "Thermostatics Mixer", route: "/products/faucets" },
        { name: "Diverters", route: "/products/faucets" },
        { name: "Mirrors", route: "/products/mirrors" },
        { name: "Bathroom Accessories", route: "/products/accessories" },
      ],
    },
    { id: 3, name: "About", route: "/about" },
    { id: 4, name: "Contact", route: "/contact" },
  ];

  return (
    <header className="header">
      <nav className="navbar">
        {/* 🔹 Logo */}
        <Image
          src={logo}
          alt="logo"
          width={180}
          height={100}
          className="logo"
        />

        {/* 🔹 Hamburger Menu (Mobile) */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </div>

        {/* 🔹 Search Bar (only on /products) */}
        {pathname === "/products" && (
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search by product..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        )}

        {/* 🔹 Navigation Menu */}
        <ul className={`menu ${menuOpen ? "open" : ""}`}>
          {menu.map((item) => (
            <li key={item.id} className="menu-item">
              <div className="menu-link-wrapper">
                <Link
                  href={item.route}
                  style={{
                    textDecoration: "none",
                    color: pathname === item.route ? "#fff" : "#cbd0d4",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    fontStyle: "Outfit",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.subMenu && <span className="arrow">▼</span>}
              </div>

              {item.subMenu && (
                <ul className="dropdown">
                  {item.subMenu.map((subItem, idx) => (
                    <li key={idx}>
                      <Link
                        href={subItem.route}
                        onClick={() => setMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* 🔹 Styles */}
      <style jsx>{`
        .header {
          background-color: #000000;
          color: white;
          height: 80px;
          display: flex;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%; 
          z-index: 1000;
          padding: 0 20px;

        }

        .navbar {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .logo {
          max-width: 180px;
          height: auto;
        }

        .hamburger {
          display: none;
          font-size: 30px;
          cursor: pointer;
          font-weight: bold;
        }

        .menu {
          display: flex;
          gap: 35px;
          list-style: none;
          margin-left: auto;
        }

        .menu-item {
          position: relative;
        }

        .menu-link-wrapper {
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
        }

        .arrow {
          font-size: 14px;
          color: #cbd0d4;
          transition: transform 0.3s ease;
        }

        .menu-item:hover .arrow {
          transform: rotate(180deg);
        }

        .dropdown {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background-color: #000000;
          border-radius: 5px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          z-index: 999;
          padding: 10px 0;
          min-width: 180px;
          transform: translateX(0);
        }

        .menu-item:hover .dropdown {
          display: block;
        }

        .dropdown li {
        list-style: none;
          padding: 10px 20px;
          white-space: nowrap;
        }

        .dropdown li a {
          color: #ffffff;
          font-size: 1rem;
          fonrt-weight: 500;
          font-family: "Outfit", sans-serif;
          text-decoration: none;
          background-color: #000000;
          text-align: left;
          transition: background 0.2s ease;
        }

        .dropdown li a:hover {
          color: white;
          font-weight: 600;
        }

        .menu a {
          text-decoration: none;
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 600;
          font-family: "Outfit";
          transition: color 0.3s ease;
        }

        .menu a:hover,
        .menu a.active {
          color: white;
          font-weight: bold;
        }

        .search-container {
          display: flex;
          align-items: flex-start;
          position: absolute;
          background-color: #50575c;
          padding: 12px 120px;
          border-radius: 20px;
          margin-left: 80px;
          border: 1px solid #646c72;
          transition: box-shadow 0.3s ease;
        }

        .search-container:hover {
          box-shadow: 0 0 6px rgba(255, 255, 255, 0.2);
        }

        .search-icon {
          font-size: 20px;
          margin-right: 25px;
          color: #646c72;
        }

        .search-input {
          background: transparent;
          border: none;
          outline: none;
          color: #ffffff;
          font-size: 18px;
          margin-left: 18px;
          width: 280px;
          font-family: "Outfit", sans-serif;
          transition: width 0.3s ease;
        }

        .search-input::placeholder {
          color: #a5a8aa;
        }

        @media (max-width: 768px) {
          .hamburger {
            display: block;
          }

          .menu {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 60px;
            left: 0;
            width: 100%;
            background-color: #33393d;
            text-align: left;
            padding: 10px 0;
            z-index: 1000;
          }

          .menu.open {
            display: flex;
            justify-content: flex-start;
            gap: 15px;
            height: 50vh;
          }

          .menu li {
            width: 100%;
            padding: 15px 20px;
            border-bottom: 1px solid #50575c;
          }

          .menu a {
            font-size: 18px;
            display: flex;
            justify-content: space-between;
            color: #cbd0d4;
          }

          .dropdown {
            position: static;
            display: none;
            background-color: #33393d;
            padding-left: 10px;
          }

          .menu-item.open .dropdown {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
