import { useState } from "react";
import { LanguageContext } from "./LanguageContext";

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
