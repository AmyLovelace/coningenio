
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = ({lang,handleLang}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(true); 
  const [theme, setTheme] = useState('light'); 

  const isActive = (path) => location?.pathname === path;
  
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

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.body.style.backgroundColor = '#222';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }, [theme]);

  return (
    <div className="hero_area">
      <header className="header_section">
       <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' } }>
       <div className="lang-toggle">
          {lang === 'esp' ? (
             <button onClick={() => handleLang('eng')} style={{ background: 'none', border: 'none', fontSize: '1rem' ,padding:'0' }}>
             🇬🇧
           </button>
            
          ) : (
            <button onClick={() => handleLang('esp')} style={{ background: 'none', border: 'none', fontSize: '1rem',padding:'0'  }}>
            🇪🇸
          </button>
          )}
        </div>

        <div className="theme-toggle">
          <button onClick={toggleTheme} style={{ background: 'none', border: 'none', fontSize: '1rem',padding:'0'  }}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
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
                <li className={`nav-item ${isActive('/') ? 'active' : ''}`}>
                    <a className="nav-link" onClick={() => navigate('/')} >{translations.HOME[lang]}</a>
                  </li>
                  <li className={`nav-item ${isActive('/nosotros') ? 'active' : ''}`}>
                    <a className="nav-link" onClick={() => navigate('/nosotros')}>{translations.US[lang]}</a>
                  </li>
                  <li className={`nav-item ${isActive('/servicios') ? 'active' : ''}`}>
                    <a className="nav-link" onClick={() => navigate('/servicios')}>{translations.SERVICES[lang]}</a>
                  </li>
                  <li className={`nav-item ${isActive('/contacto') ? 'active' : ''}`}>
                    <a className="nav-link" onClick={() => navigate('/contacto')}>{translations.CONTACT[lang]}</a>
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
