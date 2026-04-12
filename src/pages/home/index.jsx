import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./index.css";
import HeaderLogo from "../../assets/imgs/headerLogo.svg";
import Searchicon from "../../assets/imgs/SearchIcon.svg";
import RightArrowIcon from "../../assets/imgs/right-arrow.svg";
import GrassImg from "../../assets/imgs/grass.svg";
import TransleteImg from "../../assets/imgs/transleteImg.svg";
import DirectImg from "../../assets/imgs/DirectImg.svg";
import GlobalImgG from "../../assets/imgs/globalImgG.svg"
import GlobalImg from "../../assets/imgs/globalImg.svg";
import EthernetImg from "../../assets/imgs/EthernetImg.svg";

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
      {/* Header */}
      <header className="header">
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

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner flex-wrap flex-xl-nowrap d-xl-flex align-items-center justify-content-xl-between justify-content-center">
            <div className="hero-left col-xl-5 col-12 d-flex justify-content-xl-start justify-content-center flex-wrap">
              <div className="trade-box text-center color-green">
                <p>Next-Gen Trade Intelligence</p>
              </div>

              <div>
                <h1 className="hero-title text-center text-xl-start">
                  AI-Powered <span className="color-green">Agro Export</span>{" "}
                  Platform
                </h1>

                <p className="hero-text text-center text-xl-start">
                  Sell your agricultural products to international buyers with
                  ease and confidence. Leverage predictive analytics to maximize
                  your profit.
                </p>
              </div>

              <div className="hero-btn-box d-flex align-items-center flex-wrap flex-xl-nowrap col-12 col-xl-6 justify-content-xl-start">
                <button className="btn-join bgc-green me-3 col-12 col-xl-10 mb-3 mb-xl-0">
                  Join as Seller{" "}
                  <img
                    className="right-icon ms-2"
                    src={RightArrowIcon}
                    alt="Right"
                  />
                </button>
                <button className="btn-find col-12 col-xl-10">
                  Find Products
                </button>
              </div>
            </div>

            <div className="hero-right col-xl-7 col-12 d-none d-md-flex"></div>

            <div className="hero-right-m col-12 d-md-none d-flex justify-content-center">
              <div className="h-img-box col-12 mt-5">
                <img className="grass-img img-fluid" src={GrassImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Section */}
      <section className="export-sec">
        <div className="container">
          <div className="export-sec-inner">
            <div className="export-top d-flex justify-content-center flex-wrap">
              <h2 className="export-title text-center d-none d-lg-block">
                Streamline Your Export Journey
              </h2>
              <p className="export-text col-6 text-center d-none d-lg-block">
                Our advanced AI tools bridge the gap between local farms and
                global markets, removing language barriers and building trust.
              </p>
              {/* Mobile text */}

              <h2 className="export-mobile-title d-block d-lg-none text-center">
                Global Trade Simplified
              </h2>
              <p className="export-mobile-text d-block d-lg-none text-center">
                Our AI-driven tools break down barriers in international
                agricultural commerce, ensuring safe and efficient transactions.
              </p>
            </div>
            <div className="export-bottom d-flex flex-wrap justify-content-between align-items-center mt-5">
              <div className="export-card d-flex flex-wrap p-4">
                <div className="col-12 mt-4">
                  <img src={TransleteImg} alt="TransleteImg" />
                </div>
                <p className="export-card-subtitle mt-0 mb-0 mb-0">
                  AI Translation
                </p>
                <p className="export-card-text m-0 ">
                  Break through the noise with real-time translation for
                  contracts, messages, and product listings in 50+ languages.
                </p>
              </div>

              <div className="export-card d-flex flex-wrap p-4">
                <div className="col-12 mt-4">
                  <img src={DirectImg} alt="DirectImg" />
                </div>
                <p className="export-card-subtitle mt-0 mb-0 mb-0">
                  Direct Negotiation
                </p>
                <p className="export-card-text m-0 ">
                  Eliminate expensive middlemen. Negotiate terms directly with
                  verified international partners using our secure escrow tools.
                </p>
              </div>

              <div className="export-card d-flex flex-wrap p-4">
                <div className="col-12 mt-4">
                  <img src={GlobalImgG} alt="Global" />
                </div>
                <p className="export-card-subtitle mt-0 mb-0 mb-0">
                  Global Buyers
                </p>
                <p className="export-card-text m-0 ">
                  Instantly connect with a vast network of thousands of vetted
                  agricultural importers and distributors worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-sec d-none d-md-flex">
        <div className="container">
          <div className="stats-inner bgc-green d-flex align-items-center justify-content-around">
            <div className="active-box text-center">
              <p className="stats-info m-0">Active Sellers</p>
              <p className="stats-number m-0">10,000+</p>
              <p className="stats-text m-0">Verified worldwide producers</p>
            </div>

            <div className="reach-box text-center">
              <p className="stats-info m-0">Global Reach</p>
              <p className="stats-number m-0">45+</p>
              <p className="stats-text m-0">Countries currently trading</p>
            </div>

            <div className="volume-box text-center">
              <p className="stats-info m-0">Trade Volume</p>
              <p className="stats-number m-0">$200M+</p>
              <p className="stats-text m-0">
                Total transaction value processed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats section mobile */}
      <section className="stats-mobile bgc-green d-block d-md-none mt-5">
        <div className="stats-m-inner p-4">
          <div className="stats-m-top d-flex align-items-center justify-content-around">
            <div>
              <p className="stats-m-number m-0 text-center">$240M+</p>
              <p className="stats-m-text m-0 text-center">Trade Volume</p>
            </div>

            <div>
              <p className="stats-m-number m-0 text-center">12k+</p>
              <p className="stats-m-text m-0 text-center">Verified Sellers</p>
            </div>
          </div>

          <div className="stats-m-bottom d-flex align-items-center justify-content-around mt-4">
            <div>
              <p className="stats-m-number m-0 text-center">85+</p>
              <p className="stats-m-text m-0 text-center">Product Types</p>
            </div>

            <div>
              <p className="stats-m-number m-0 text-center">24/7</p>
              <p className="stats-m-text m-0 text-center">AI Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="cta-sec pt-5 pb-5">
        <div className="container">
          <div className="cta-sec-inner text-center d-none d-md-block pt-5 mt-3 pb-5">
            <h5 className="cta-subtitle mb-4">Ready to expand your market?</h5>
            <p className="cta-text mb-4">
              Join the waitlist to get early access to our AI market prediction
              tools.
            </p>
            <form action="#">
              <input
                className="cta-input p-4"
                placeholder="Enter your email address"
                type="email"
                required
              />
              <button className="cta-btn ms-3" type="submit">
                Get Started
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top d-flex align-items-center justify-content-between pb-5 p-5">
            <div className="footer-t-left col-lg-3 col-12 d-flex flex-wrap justify-content-center text-center text-lg-start justify-content-lg-start">
              <img src={HeaderLogo} alt="Agro" />
              <p className="footer-text mt-3">
                Empowering farmers and producers to reach global markets through
                advanced artificial intelligence and secure trade protocols.
              </p>
              <div className="d-flex align-items-center gap-4">
                <img src={GlobalImg} alt="Global" />
                <img src={EthernetImg} alt="Ethernet" />
              </div>
            </div>

            <div className="footer-t-right d-flex align-items-center justify-content-center col-9">
              <ul className="footer-ul d-flex flex-column gap-lg-3">
                <li className="list-group-item">
                  <p className="footer-ul-text">PLATFORM</p>
                </li>

                <li className="footer-li list-group-item">
                  <NavLink className="text-decoration-none">
                    MarketPlace
                  </NavLink>
                </li>
                <li className="footer-li list-group-item">
                  <NavLink className="text-decoration-none">
                    Logistics AI
                  </NavLink>
                </li>

                <li className="footer-li list-group-item">
                  <NavLink className="text-decoration-none">Insurance</NavLink>
                </li>
              </ul>

              <ul className="footer-ul d-flex flex-column gap-lg-3">
                <li className="list-group-item">
                  <p className="footer-ul-text">COMPANY</p>
                </li>

                <li className="footer-li list-group-item">
                  <NavLink className="text-decoration-none">About Us</NavLink>
                </li>
                <li className="footer-li list-group-item">
                  <NavLink className="text-decoration-none">
                    Sustainability
                  </NavLink>
                </li>

                <li className="footer-li list-group-item">
                  <NavLink className="text-decoration-none">Careers</NavLink>
                </li>
              </ul>

              <ul className="footer-ul d-flex flex-column gap-lg-3">
                <li className="list-group-item">
                  <p className="footer-ul-text">Legal</p>
                </li>

                <li className="footer-li list-group-item">
                  <NavLink className="text-decoration-none">Privacy </NavLink>
                </li>

                <li className="footer-li list-group-item">
                  <NavLink className="text-decoration-none">Terms</NavLink>
                </li>

                <li className="footer-li list-group-item">
                  <NavLink className="text-decoration-none">Compliance</NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom d-flex justify-content-between align-items-center p-5">
            <div>
              <p className="footer-copyright">
                © 2024 AgroExport AI. All rights reserved.
              </p>
            </div>

            <div className="d-flex align-items-center gap-4">
              <p className="footer-b-text">Security</p>
              <p className="footer-b-text">Status</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Home;
