import { useState, useRef, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase/config';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const [submitMessage, setSubmitMessage] = useState('');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Reset status cuando el usuario empiece a escribir de nuevo
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    try {
      await addDoc(collection(db, 'messages'), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      setSubmitStatus('success');
      setSubmitMessage('¡Mensaje enviado correctamente! Te contactaré pronto.');

      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);

      setSubmitStatus('error');
      setSubmitMessage(
        'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o contáctame directamente.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'aguilerac.alejandro@gmail.com',
      href: 'mailto:aguilerac.alejandro@gmail.com',
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+569 49040567',
      href: 'tel:+56949040567',
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Santiago, Región Metropolitana Chile',
      href: 'https://maps.google.com/?q=Santiago,Región+Metropolitana,Chile',
    },
  ];

  return (
    <section id='contact' className='contact-section' ref={sectionRef}>
      <div className='container'>
        <div className='contact-header'>
          <MessageCircle className='contact-icon' size={32} />
          <h2 className='section-title'>Contacto</h2>
          <p className='contact-subtitle'>
            ¿Tienes un proyecto en mente? Hablemos y hagámoslo realidad juntos.
          </p>
        </div>

        <div className={`contact-content ${isVisible ? 'fade-in-up' : ''}`}>
          <div className='contact-info'>
            <div className='contact-intro'>
              <h3>¡Hablemos!</h3>
              <p>
                Estoy siempre interesado en nuevos desafíos y oportunidades de colaboración. No
                dudes en contactarme si tienes alguna pregunta o propuesta.
              </p>
            </div>

            <div className='contact-methods'>
              {contactMethods.map((method, index) => (
                <a
                  key={method.label}
                  href={method.href}
                  className='contact-method'
                  style={{ animationDelay: `${index * 0.1}s` }}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='method-icon'>
                    <method.icon size={24} />
                  </div>
                  <div className='method-info'>
                    <span className='method-label'>{method.label}</span>
                    <span className='method-value'>{method.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form className='contact-form' onSubmit={handleSubmit}>
            <div className='form-header'>
              <h3>Envíame un mensaje</h3>
              <p>Responderé tan pronto como sea posible</p>
            </div>

            {/* Mensaje de estado del envío */}
            {submitStatus && (
              <div className={`submit-status ${submitStatus}`}>
                {submitStatus === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                <span>{submitMessage}</span>
              </div>
            )}

            <div className='form-grid'>
              <div className='form-group'>
                <label htmlFor='name' className='form-label'>
                  Nombre completo *
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Tu nombre'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='form-input'
                  disabled={isSubmitting}
                />
              </div>

              <div className='form-group'>
                <label htmlFor='email' className='form-label'>
                  Email *
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='tu@email.com'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='form-input'
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className='form-group'>
              <label htmlFor='subject' className='form-label'>
                Asunto *
              </label>
              <input
                type='text'
                id='subject'
                name='subject'
                placeholder='¿Sobre qué quieres hablar?'
                value={formData.subject}
                onChange={handleChange}
                required
                className='form-input'
                disabled={isSubmitting}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='message' className='form-label'>
                Mensaje *
              </label>
              <textarea
                id='message'
                name='message'
                placeholder='Cuéntame sobre tu proyecto o idea...'
                rows='6'
                value={formData.message}
                onChange={handleChange}
                required
                className='form-textarea'
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button
              type='submit'
              className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className='spinner'></div>
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Enviar Mensaje
                </>
              )}
            </button>

            <div className='form-note'>
              <p>
                * Todos los campos son requeridos. Tu información será usada solo para contactarte.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
