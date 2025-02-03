# Portfolio Romain Baert - Développeur Full-Stack Freelance

![Astro Badge](https://img.shields.io/badge/Astro-FF5D01?logo=astro&logoColor=fff&style=for-the-badge)
![React Badge](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=for-the-badge)
![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=for-the-badge)

## À propos

Portfolio professionnel créé avec Astro, mettant en valeur mes compétences en développement Full-Stack. Le site présente un design moderne inspiré de l'espace, avec une attention particulière portée à l'expérience utilisateur et aux performances.

### Caractéristiques

- Design responsive et moderne
- Animations fluides et interactives
- Optimisation SEO poussée
- Formulaire de contact interactif
- Thème spatial personnalisé
- Notifications toast élégantes
- Performance optimisée avec Astro

## Technologies

- **Framework** : [Astro](https://astro.build/)
- **UI Components** : [React](https://reactjs.org/)
- **Styling** : CSS Modules & Variables
- **Notifications** : React-Toastify
- **Icons** : Font Awesome
- **Fonts** : Orbitron & Montserrat

## Installation

```bash
# Cloner le projet
git clone https://github.com/ampersander/portfolio-astro.git

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env
# Puis éditer le fichier .env avec vos informations :
# EMAIL= votre adresse email
# EMAILJS_PUBLICKEY= votre clé publique EmailJS
# EMAILJS_SERVICE_ID= votre ID de service EmailJS
# EMAILJS_TEMPLATE_ID= votre ID de template EmailJS

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build
```

## Configuration Email

Le formulaire de contact utilise EmailJS pour envoyer les messages. Pour configurer l'envoi d'emails :

1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Créez un service email et un template
3. Copiez le fichier `.env.example` en `.env`
4. Remplissez les variables suivantes dans votre `.env` :
   - `EMAIL` : Votre adresse email
   - `EMAILJS_PUBLICKEY` : Votre clé publique EmailJS
   - `EMAILJS_SERVICE_ID` : L'ID de votre service EmailJS
   - `EMAILJS_TEMPLATE_ID` : L'ID de votre template EmailJS

## Structure du Projet

```
/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   ├── ContactForm.jsx
│   │   ├── Experience.astro
│   │   ├── Hero.astro
│   │   └── Projects.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       ├── components/
│       ├── variables.css
│       ├── global.css
│       └── toastify.css
└── package.json
```

## Personnalisation

Le site utilise un système de variables CSS pour une personnalisation facile :

```css
:root {
  --neon-blue: #00c3ff;
  --neon-purple: #8a2be2;
  --font-heading: 'Orbitron', sans-serif;
  --font-body: 'Montserrat', sans-serif;
}
```

## Configuration

Les principales configurations se trouvent dans :
- `astro.config.mjs` : Configuration Astro
- `src/styles/variables.css` : Variables CSS globales
- `public/robots.txt` : Configuration SEO

## Responsive Design

Le site est entièrement responsive avec des breakpoints pour :
- Mobile : < 480px
- Tablette : < 768px
- Desktop : > 1024px

## Déploiement

```bash
# Build du projet
npm run build

# Preview de la version de production
npm run preview
```

## License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## Contact

- Email : nebulacode@hotmail.com
- LinkedIn : [Romain Baert](https://fr.linkedin.com/in/romain-baert)
- GitHub : [@ampersander](https://github.com/ampersander)

---

Développé avec ❤️ par Romain Baert
