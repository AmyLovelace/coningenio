import { useLanguage } from "../../hooks/useLanguage";
import './Hero.css';


const Hero = () => {
  const { lang } = useLanguage(); 

  const translations = {
      SUBTITLE: {
        esp: 'Consultora',
        eng: 'Solutions'
      },
      MORE: {
        esp: 'Saber más',
        eng: 'Know more'
      },
      DESCRIPTION: {
        esp: 'Materializamos tus proyectos con ideas y soluciones innovadoras.',
        eng: 'We bring your projects to life with innovative ideas and solutions.'
      }
  };

  return (
    <section className="slider_section position-relative">
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="slider_item-box layout_padding2">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="img-box">
                      <div>
                        <img src="src/assets/img/slider-img.jpg" alt="" className="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="detail-box d-flex align-items-center justify-content-center flex-column">
                      <div style={{width: '300px'}}>
                        <h1 id="hero-title" >
                          Coningenio
                        <br/>
                          <span>
                          {translations.SUBTITLE[lang]}
                          </span>
                        </h1>
                        <p id="hero-description" >
                          {translations.DESCRIPTION[lang]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}

export default Hero;