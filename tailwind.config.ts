import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Scanne tout le dossier src
  ],
  theme: {
    extend: {
      colors: {
        medical: {
          50: '#f0fdfa', 
          100: '#ccfbf1',
          500: '#4cd1c5', // <--- C'est la couleur exacte de ton image (Vert Menthe)
          600: '#2dd4bf', // Un peu plus foncé pour le survol
          700: '#0f766e', // Texte foncé
          900: '#134e4a', // Bannière du haut très foncée
        },
      },
    },
  },
  plugins: [],
};
export default config;