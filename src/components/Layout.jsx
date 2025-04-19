// src/components/Layout.jsx
import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
    const [lang, setLang] = useState('esp');
  
    const handleLanguageChange = (language) => {
        console.log("seteando lang desde layout")
        setLang(language);
      };
    return (
    <div>
      <Header style={{ background: '#222', padding: '1rem', color: 'white' }} lang={lang} handleLang={handleLanguageChange}>
        Header
      </Header>

      <main style={{ padding: '2rem' }}>
        {children}
      </main>

      <Footer style={{ background: '#222', padding: '1rem', color: 'white', marginTop: '2rem' }} lang={lang}>
        Footer
      </Footer>
    </div>
  );
};

export default Layout;
