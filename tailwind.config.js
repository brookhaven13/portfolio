/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      nunito: ["nunito", "monospace"],
      "noto-sans": ["Noto Sans", "monospace"],
    },
    extend: {},
  },
  variants: {
    extend: {
      display: ["group-focus"],
    },
  },
  plugins: [],
};
