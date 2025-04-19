
import React, { useState } from 'react';

const Header = ({lang,handleLang}) => {
  const [isCollapsed, setIsCollapsed] = useState(true); 

  const translations = {
    HOME: {
      esp: 'Inicio',
      eng: 'Home'
    },
    US: {
      esp: 'Nosotros',
      eng: 'About us'
    },
    SERVICES: {
      esp: 'Servicios',
      eng: 'Services'
    },
    CONTACT: {
      esp: 'Contáctanos',
      eng: 'Contact us'
    }
  };

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="hero_area">
      <header className="header_section">
        <div className="lang-toggle">
          <button onClick={() => handleLang('esp')} style={{ background: 'none', border: 'none' }}>🇪🇸</button> |
          <button onClick={() => handleLang('eng')} style={{ background: 'none', border: 'none' }}>🇬🇧</button>
        </div>

        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand" to="/">
            Coningenio
            </a>
            <button
              className="navbar-toggler ml-auto"
              type="button"
              onClick={toggleNavbar}
              aria-controls="navbarSupportedContent"
              aria-expanded={!isCollapsed}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarSupportedContent">
              <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" to="/">{translations.HOME[lang]}</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" to="/nosotros">{translations.US[lang]}</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" to="/servicios">{translations.SERVICES[lang]}</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" to="/contacto">{translations.CONTACT[lang]}</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
