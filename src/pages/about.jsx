import React, { useEffect, useState } from 'react';
import { getAbout } from '../services/nosotros';
import { useLanguage } from '../hooks/useLanguage';
import './about.css';

const AboutPage = () => {
  const [aboutData, setAboutData] = useState([]);
  const [error, setError] = useState(null);
  console.log(error);
  const { lang } = useLanguage(); 

  
  const translations = {
      TITLE: {
          esp: 'SOBRE NOSOTROS',
          eng: 'ABOUT US'
      },
      MORE: {
          esp: 'Saber más',
          eng: 'Know more'
      }
  };

  useEffect(() => {
    console.log('Entro al useEffect');
    const fetchData = async () => {
      try {
        const data = await getAbout();
        console.log(data);
        setAboutData(data);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, []);

  if (error) {
    return <div className="alert alert-danger">Error: {error.message}</div>;
  }

  return (
    
    <section className="about_section" style={{ marginBottom: '100px' }}>
        
      <div className="custom_heading-container flex-column" >
          <h3 className="pb-3">
          {translations.TITLE[lang]}
          </h3>
      </div>

      <div className="container">
        
        <div className="img-box pb-3">
            <img src="assets/img/animacs.jpg" alt=""/>
        </div>

        <div className="pt-5 flex-column">

          <h3 className="pb-3">
              <b>{aboutData[0] ? aboutData[0].titulo[lang] : ""}</b>
          </h3>

          <p className="pt-2">
            {aboutData[0] ? aboutData[0].descripcion[lang] : ""}
          </p>
        
        </div>

      </div>

      <div className="about-container mt-5">

        <div className="card-about custom_heading-container flex-column" style={{ maxWidth: '400px' }}>
          <div >
              <img className="img-about-card" src="assets/img/mision.JPG" alt="" />
          </div>
      
          <h3 className="title-card-about">
            {aboutData[1] ? aboutData[1].titulo[lang] : ""}
          </h3>

          <p className="pt-3 pb-3">
            {aboutData[1] ? aboutData[1].descripcion[lang] : ""}
          </p>
        </div>

        <div className="card-about custom_heading-container flex-column" style={{ maxWidth: '400px' }}>

          <div>
              <img className="img-about-card" src="assets/img/vision.JPG" alt="" />
          </div>
            
          <h3 className="title-card-about">
            {aboutData[2] ? aboutData[2].titulo[lang] : ""}
          </h3>

          <p className="pt-3">
              {aboutData[2] ? aboutData[2].descripcion[lang] : ""}
          </p>

        </div>

      </div>
    </section>
  );
};
export default AboutPage;