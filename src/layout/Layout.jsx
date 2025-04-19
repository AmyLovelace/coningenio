// src/components/Layout.jsx
import React from 'react';
import Header from './header';
import Footer from './footer';
import { useLanguage } from '../hooks/useLanguage';

const Layout = ({ children }) => {

    const { lang, setLang } = useLanguage();

    return (
    <div>
      <Header style={{ background: '#222', padding: '1rem', color: 'white' }} lang={lang} handleLang={setLang}>
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
