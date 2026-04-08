import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./index.css";
import HeaderLogo from "../../assets/imgs/headerLogo.svg";
import Searchicon from "../../assets/imgs/SearchIcon.svg";
import HeroImg from "../../assets/imgs/HeroImg.svg";
import RightArrowIcon from "../../assets/imgs/right-arrow.svg"

export const Home = () => {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    console.log("Search:", query);
  };

  return (
    <section>
      <header className="header bg-white shadow-sm">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between py-2">
            <div className="header-left d-flex align-items-center">
              {/* Logo */}
              <div className="d-flex align-items-center me-3">
                <img src={HeaderLogo} alt="Agro" />
              </div>

              {/* Desktop nav (768px dan katta) */}
              <nav className="d-none d-md-flex align-items-center ms-lg-5">
                <ul className="d-flex align-items-center m-0 p-0">
                  <li className="list-group-item me-4">
                    <NavLink className="text-decoration-none h-gray" to="#">
                      Marketplace
                    </NavLink>
                  </li>
                  <li className="list-group-item me-4">
                    <NavLink className="text-decoration-none h-gray" to="#">
                      How it Works
                    </NavLink>
                  </li>
                  <li className="list-group-item me-4">
                    <NavLink className="text-decoration-none h-gray" to="#">
                      Pricing
                    </NavLink>
                  </li>
                  <li className="list-group-item">
                    <NavLink className="text-decoration-none h-gray" to="#">
                      About
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="header-right d-flex align-items-center">
              {/* Search input - always visible */}
              <form
                className="search-box mx-3 flex-grow-1 d-none d-xl-block"
                onSubmit={handleSearch}
              >
                <span className="search-icon">
                  <img src={Searchicon} alt="search" />
                </span>
                <input
                  type="text"
                  className="form-control my-search-input"
                  placeholder="Search markets..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </form>

              {/* Desktop login/signup */}
              <div className="d-none d-md-flex align-items-center">
                <NavLink to="#">
                  <button className="btn-login me-2">Login</button>
                </NavLink>
                <NavLink to="#">
                  <button className="btn-signup bgc-green text-white">
                    SignUp
                  </button>
                </NavLink>
              </div>
            </div>

            {/* Hamburger for mobile */}
            <button
              className="btn d-md-none border-0 ms-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="d-md-none mt-2">
              <nav>
                <ul className="nav flex-column text-center">
                  <li className="nav-item">
                    <NavLink className="nav-link h-gray" to="#">
                      Marketplace
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link h-gray" to="#">
                      How it Works
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link h-gray" to="#">
                      Pricing
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link h-gray" to="#">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item mt-2">
                    <NavLink to="#">
                      <button className="btn-login w-100 mb-2">Login</button>
                    </NavLink>
                    <NavLink to="#">
                      <button className="btn-signup w-100 bgc-green text-white">
                        SignUp
                      </button>
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-inner d-flex align-items-center justify-content-between">
            <div className="hero-left col-5">
              <div className="trade-box text-center color-green">
                <p>Next-Gen Trade Intelligence</p>
              </div>

              <div>
                <h1 className="hero-title">
                  AI-Powered <span className="color-green">Agro Export</span> Platform
                </h1>

                <p className="hero-text">
                  Sell your agricultural products to international buyers with
                  ease and confidence. Leverage predictive analytics to maximize
                  your profit.
                </p>
              </div>

              <div className="hero-btn-box">
                <button className="btn-join bgc-green me-3">
                  Join as Seller <img src={RightArrowIcon} alt="Right" />
                </button>
                <button className="btn-find">Find Products</button>
              </div>
            </div>
            <div className="hero-right col-7"></div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
