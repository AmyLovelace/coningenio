import React from 'react';

const Footer = ({lang}) => {

  const translations = {
    MORE: {
      esp: 'Saber más',
      eng: 'Know more'
    }
   
  };



  return (

      <section className="container-fluid footer_section">
          <div className="container mt-5">
              <div className="btn-box">
                  <a href="/contacto">
                  {translations.MORE[lang]}
                  </a>
                  <hr />
              </div>
          </div>
          <p>
              Copyright &copy; 2025 Desarrollo Backend M-50
              <a>IPSS</a>
          </p>
      </section>
  );
};

export default Footer;

