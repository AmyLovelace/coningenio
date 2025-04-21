import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = ({lang}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const translations = {
    MORE: {
      esp: 'Saber más',
      eng: 'Know more'
    }
   
  };

 const handleNavigate = () => {
    navigate('/contacto');
    window.scrollTo(0, 0); 
  };

  return (

      <section className="container-fluid footer_section">
          {location.pathname !== '/contacto' && ( 
          <div className="container mt-5">
              <div className="btn-box">
                  <a onClick={handleNavigate}>
                  {translations.MORE[lang]}
                  </a>
                  <hr />
              </div>
          </div>)}
          <p>
              Copyright &copy; 2025 Desarrollo Backend M-50
              <a>IPSS</a>
          </p>
      </section>
  );
};

export default Footer;

