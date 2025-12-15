/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kimbo: {
          primary: '#2E7D32',    // Verde Bosque
          secondary: '#8D6E63',  // Marrón Tierra
          accent: '#A5D6A7',     // Verde Claro
          bg: '#F1F8E9',         // Fondo Suave
        }
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light"],
  },
}