import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setLanguage } from "../store/slices/language"; 
import translations from "./translations"; 

function Header() {
  const dispatch = useDispatch();
  const numberOfItems = useSelector((state) => state.cartItems.numberOfItems);
  const currentLanguage = useSelector((state) => state.language.currentLanguage);
  const availableLanguages = useSelector((state) => state.language.availableLanguages);

  const t = translations[currentLanguage]; 

  const handleLanguageChange = (lang) => {
    dispatch(setLanguage(lang));
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand ms-5" to="/">
          {t.products}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center">
            <li className="nav-item me-4">
              <Link className="nav-link active" to="/">
                {t.home}
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link" to="/about">
                {t.about}
              </Link>
            </li>
            <li className="nav-item me-5 position-relative">
              <Link className="nav-link" to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
              {numberOfItems > 0 && (
                <span
                  className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle"
                  style={{ fontSize: "0.8rem" }}
                >
                  {numberOfItems}
                </span>
              )}
            </li>
            <li className="nav-item dropdown me-5">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                id="languageDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {currentLanguage === "en" ? "English" : "العربية"}
              </button>
              <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                {availableLanguages.map((lang) => (
                  <li key={lang}>
                    <button
                      className="dropdown-item"
                      onClick={() => handleLanguageChange(lang)}
                    >
                      {lang === "en" ? "English" : "العربية"}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
