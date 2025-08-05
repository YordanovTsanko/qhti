/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#124880", // Customize to your preferred primary
        secondary: "#B45400", // Customize to your preferred secondary
      },
      fontFamily: {
        primary: ["Inter", "sans-serif"], // Clean and professional sans-serif font
        secondary: ["Sofia Sans", "sans-serif"], // Elegant and modern sans-serif font
      },
    },
  },
  plugins: [],
};
