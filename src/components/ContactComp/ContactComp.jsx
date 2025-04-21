import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import Swal from 'sweetalert2';

const translations = {
  TITLE: {
    esp: 'Estemos en contacto',
    eng: "Let's get in touch",
  },
  DESCRIPTION: {
    esp: 'Envíanos un correo, llamanos o llena el formulario <br/>y cuéntanos cómo coningenio podemos hacer <span style=\"color: #ff4f5a;\">despegar</span> tu marca',
    eng: 'Send us an email, call us or fill out the form <br/>and tell us how can we help your brand take off',
  },
  ADDRESS: { esp: 'Dirección física:', eng: 'Address:' },
  PHONE: { esp: 'Teléfono:', eng: 'Phone:' },
  WEBSITE: { esp: 'Sitio Web:', eng: 'Website:' },
  EMAIL: { esp: 'Correo electrónico:', eng: 'Email:' },
  FORM_TITLE: { esp: 'Envianos un mensaje', eng: 'Send us a message' },
  FORM_NAME: { esp: 'Tu nombre', eng: 'Your name' },
  FORM_EMAIL: { esp: 'Tu email', eng: 'Your email' },
  FORM_PHONE: { esp: 'Tu teléfono', eng: 'Your phone' },
  FORM_SERVICE: { esp: 'Selecciona que servicio necesitas', eng: 'Select the service you need' },
  FORM_SERVICE_OPTIONS: {
    esp: [
      'Selecciona que servicio necesitas',
      'Cotizar proyecto',
      'Soporte post venta',
      'Consultas generales',
    ],
    eng: [
      'Select the service you need',
      'Quote project',
      'Post-sale support',
      'General inquiries',
    ],
  },
  FORM_MESSAGE_LABEL: { esp: 'Mensaje', eng: 'Message' },
  FORM_MESSAGE_PLACEHOLDER: { esp: 'Ingresa aqui tu mensaje', eng: 'Enter your message here' },
  FORM_SEND: { esp: 'Enviar', eng: 'Send' },
};


const validationMessages = {
  name: {
    esp: 'Nombre requerido',
    eng: 'Name required',
  },
  email: {
    esp: 'Email no válido',
    eng: 'Invalid email',
  },
  phone: {
    esp: 'Teléfono no válido',
    eng: 'Invalid phone number',
  },
  service: {
    esp: 'Debes seleccionar un servicio',
    eng: 'You must select a service',
  },
  message: {
    esp: 'Mensaje requerido',
    eng: 'Message required',
  },
  successTitle: {
    esp: 'Formulario enviado!',
    eng: 'Form submitted!',
  },
  successText: {
    esp: 'Gracias por contactarnos.',
    eng: 'Thank you for contacting us.',
  },
};
  const ContactForm = () => {
  const { lang } = useLanguage();  
  

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return validationMessages.name[lang];
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return validationMessages.email[lang];
        break;
      case 'phone':
        const phoneRegex = /^[0-9\-\+\s\(\)]+$/;
        if (!phoneRegex.test(value)) return validationMessages.phone[lang];
        break;
      case 'service':
        if (value === translations.FORM_SERVICE_OPTIONS[lang][0]) return validationMessages.service[lang];
        break;
      case 'message':
        if (!value.trim()) return validationMessages.message[lang];
        break;
      default:
        return '';
    }
    return '';
  };

  const showError = (message) => {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: message,
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const validationError = validateField(name, value);
    if (validationError) {
      showError(validationError);
    }
  };
  
  const handleSubmit = (e) => {
    console.log("e",e)
    e.preventDefault();
    for (const field in formData) {
      const validationError = validateField(field, formData[field]);
      if (validationError) {
        showError(validationError);
        return;
      }
    }
    console.log('Formulario válido:', formData);
    Swal.fire({
      icon: 'success',
      title: validationMessages.successTitle[lang],
      text: validationMessages.successText[lang],
    });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-4"style={{ marginBottom:'40px'}}
        >
          <h1 className="display-5 mb-3">{translations.TITLE[lang]}</h1>
          <h5 className="text-secondary pb-3" dangerouslySetInnerHTML={{ __html: translations.DESCRIPTION[lang] + ' 🚀' }} />

          <div className="d-flex flex-column flex-md-row bd-highlight justify-content-between">
          <div className="p-2 bd-highlight">
            <p className="mt-4">
              <strong>{translations.ADDRESS[lang]}</strong>
            </p>
            <p>Av. Providencia 1234, Oficina 601<br/>Providencia, Santiago, Chile</p>
            <p className="mt-4">
              <strong>{translations.PHONE[lang]}</strong>
            </p>
            <p>+56 2 1234 5678</p>
            <p className="mt-4">
              <strong>{translations.WEBSITE[lang]}</strong>
            </p>
            <a href="https://www.coningenio.cl">www.coningenio.cl</a>
            <p className="mt-4">
              <strong>{translations.EMAIL[lang]}</strong>
            </p>
            <a href="mailto:info@coningenio.cl">info@coningenio.cl</a>
          </div>
          <div className="pb-0 align-self-center mt-4 mt-md-0"  style={{ width: "100%", maxWidth: "400px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1222.591929483464!2d-70.6222654152473!3d-33.42907098094119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2scl!4v1744746894553!5m2!1ses-419!2scl"
              style={{ border: 0, width: "100%", height: "300px" }}
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>

        </div>


        <div className="col-md-12 border rounded p-5 contact-card">
          <section className="contact_section">
            <div className="custom_heading-container">
              <h3>{translations.FORM_TITLE[lang]}</h3>
            </div>
            <div className="container layout_padding2-top">
              <form onSubmit={handleSubmit}>
                <div>
                  <input className="form-control border" type="text" placeholder={translations.FORM_NAME[lang]} required onChange={handleChange}
                    onBlur={handleBlur}   name="name" value={formData.name} />
                </div>
                <div>
                  <input className="form-control border" type="email" placeholder={translations.FORM_EMAIL[lang]} required  onChange={handleChange}
                    onBlur={handleBlur}     name="email" value={formData.email}/>
                </div>
                <div>
                  <input className="form-control border" type="text" placeholder={translations.FORM_PHONE[lang]} required onChange={handleChange}
                    onBlur={handleBlur}  name="phone" value={formData.phone} />
                </div>
                <div>
                  <select className="form-control border" required onChange={handleChange}
                    onBlur={handleBlur}
                    name="service"
                    value={formData.service}
                    >
                    {translations.FORM_SERVICE_OPTIONS[lang].map((option, idx) => (
                      <option key={idx} value={option} disabled={idx === 0} selected={idx === 0}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mt-3">{translations.FORM_MESSAGE_LABEL[lang]}</label>
                  <textarea
                    className="form-control border"
                    rows="5"
                    placeholder={translations.FORM_MESSAGE_PLACEHOLDER[lang]}
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="message"
                    value={formData.message}
                  ></textarea>
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <button type="submit" className="btn btn-primary px-4 py-2">
                    {translations.FORM_SEND[lang]}
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default ContactForm;