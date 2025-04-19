import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('esp');

  const handleLanguageChange = (language) => {
    setLang(language);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
};
