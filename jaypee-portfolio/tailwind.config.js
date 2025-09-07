/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto", "sans-serif"],       // body / description
        heading: ["Orbitron", "sans-serif"],  // headers / titles
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
