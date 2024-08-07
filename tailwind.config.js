/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        beachMalam: "url('/src/assets/beach-malam.png')",
        beachSore: "url('/src/assets/beach-sore.png')",
        beachSiang: "url('/src/assets/beach-siang.png')",
        nightCity: "url('/src/assets/night.jpg')",
      },
      fontFamily: "sans-serif",
    },
  },
  plugins: [],
}