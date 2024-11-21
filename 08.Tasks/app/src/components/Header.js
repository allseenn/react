import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header center">
      <div className="header__left">
        <Link to="/">
          <img src="/img/logo.png" alt="logo" />
        </Link>
        <button className="header__search">
          <img src="/img/search.svg" alt="search" />
        </button>
      </div>
      <nav className="header__right">
        <label htmlFor="header__check">
          <img src="/img/menu.svg" alt="menu" />
        </label>
        <Link className="header__link-site" to="/registration">
          <img src="/img/reg.svg" alt="reg" />
        </Link>
        <Link className="header__link-site" to="/cart">
          <img src="/img/cart.svg" alt="cart" />
        </Link>
      </nav>
      <input className="header__checkbox" id="header__check" type="checkbox" />
      <div className="mobile-menu">
        <div className="mobile-menu__link-site">
          <Link to="/registration">
            <svg width="29" height="29" viewBox="0 0 29 29" fill="none">
              {/* SVG Path содержится в оригинальном коде */}
              <path
                d="M14.5 19.937C19 19.937..."
                fill="black"
              />
            </svg>
          </Link>
          <Link to="/cart">
            <svg width="32" height="29" viewBox="0 0 32 29" fill="none">
              {/* SVG Path содержится в оригинальном коде */}
              <path
                d="M26.2009 29C25.5532 28.9738..."
                fill="black"
              />
            </svg>
          </Link>
        </div>
        <h3 className="mobile-menu__heading">MENU</h3>
        <div className="mobile-menu__box">
          <div className="mobile-menu__item">
            <Link to="/catalog" className="mobile-menu__title">
              MAN
            </Link>
            <ul className="mobile-menu__list">
              <li>
                <Link className="mobile-menu__link" to="#">
                  Accessories
                </Link>
              </li>
              <li>
                <Link className="mobile-menu__link" to="#">
                  Bags
                </Link>
              </li>
              <li>
                <Link className="mobile-menu__link" to="#">
                  Denim
                </Link>
              </li>
              <li>
                <Link className="mobile-menu__link" to="#">
                  T-Shirts
                </Link>
              </li>
            </ul>
          </div>
          <div className="mobile-menu__item">
            <Link to="/catalog" className="mobile-menu__title">
              WOMAN
            </Link>
            <ul className="mobile-menu__list">
              <li>
                <Link className="mobile-menu__link" to="#">
                  Accessories
                </Link>
              </li>
              <li>
                <Link className="mobile-menu__link" to="#">
                  Bags
                </Link>
              </li>
              <li>
                <Link className="mobile-menu__link" to="#">
                  Denim
                </Link>
              </li>
              <li>
                <Link className="mobile-menu__link" to="#">
                  T-Shirts
                </Link>
              </li>
            </ul>
          </div>
          <div className="mobile-menu__item">
            <Link to="/catalog" className="mobile-menu__title">
              KIDS
            </Link>
            <ul className="mobile-menu__list">
              <li>
                <Link className="mobile-menu__link" to="#">
                  Accessories
                </Link>
              </li>
              <li>
                <Link className="mobile-menu__link" to="#">
                  Bags
                </Link>
              </li>
              <li>
                <Link className="mobile-menu__link" to="#">
                  Denim
                </Link>
              </li>
              <li>
                <Link className="mobile-menu__link" to="#">
                  T-Shirts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

