import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.PUBLIC_EMAILJS_PUBLICKEY;
const TO_EMAIL = import.meta.env.PUBLIC_EMAIL;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false); // 🔴 Ajout du state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Désactive le bouton

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: TO_EMAIL
        },
        PUBLIC_KEY
      );

      toast.success("Message envoyé ! Je vous recontacterai bientôt.", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error("Une erreur est survenue lors de l'envoi du message.", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    } finally {
      setIsLoading(false); // 🔴 Réactive le bouton après la requête
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Votre nom"
          required
          disabled={isLoading} // Désactiver pendant le chargement
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Votre email"
          required
          disabled={isLoading}
        />
      </div>
      <div className="form-group">
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Votre message"
          required
          disabled={isLoading}
        />
      </div>
      <button type="submit" className="submit-btn" disabled={isLoading}>
        {isLoading ? "Envoi..." : "Envoyer"} {/* Changer le texte du bouton */}
      </button>
    </form>
  );
}
