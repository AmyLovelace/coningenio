import React, { useEffect, useState } from 'react';
import { getServices } from '../services/servicios';
import { useLanguage } from '../context/LanguajeContext';

const Services = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);
  const { lang } = useLanguage();  

  const translations = {
    NUESTROS_SERVICIOS: {
      esp: 'NUESTROS SERVICIOS',
      eng: 'OUR SERVICES',
    },
    DESCRIPCION: {
      esp: 'Ofrecemos soluciones innovadoras y personalizadas para ayudarte a alcanzar tus objetivos.',
      eng: 'We offer innovative and personalized solutions to help you achieve your goals.',
    },
    MORE: {
      esp: 'Saber más',
      eng: 'Know more',
    },
  };

  useEffect(() => {
    getServices()
      .then(setServices)
      .catch(setError);
  }, []);

  if (error) {
    return <div className="alert alert-danger">Error: {error.message}</div>;
  }

  return (
    <section className="service_section layout_padding-bottom" style={{ marginBottom: '100px' }}>
      <div className="container">
        <div className="custom_heading-container">
          <h3>{translations.NUESTROS_SERVICIOS[lang]}</h3>
        </div>
        <p>{translations.DESCRIPCION[lang]}</p>

        <div id="service-container" className="row g-4">
          {services
            .filter(service => service.activo)
            .map(service => (
              <div key={service.id} className="col-12 col-md-6 mb-5 d-flex">
                <div className="card shadow-sm w-100 h-100">
                  <img
                    src={`/assets/img/s-${service.id}.jpg`}
                    className="card-img-top img-fluid"
                    alt="Imagen servicio"
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title" style={{ color: '#193b75' }}>
                      {service.titulo[lang]}
                    </h5>
                    <p className="card-text text-muted">{service.descripcion[lang]}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
