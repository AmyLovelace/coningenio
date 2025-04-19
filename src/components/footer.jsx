import React, { useState } from 'react';

const Footer = ({lang}) => {

  const translations = {
    MORE: {
      esp: 'Saber más',
      eng: 'Know more'
    }
   
  };



  return (

      <section class="container-fluid footer_section">
          <div class="container mt-5">
              <div class="btn-box">
                  <a href="/">
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

