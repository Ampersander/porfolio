import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message envoyé ! Je vous recontacterai bientôt.", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error("Une erreur est survenue lors de l'envoi du message.", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      }
    } catch (error) {
      toast.error("Une erreur est survenue lors de l'envoi du message.", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
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
        />
      </div>
      <button type="submit" className="submit-btn">Envoyer</button>
    </form>
  );
}
