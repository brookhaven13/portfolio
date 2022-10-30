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
      mono: ["Menlo", "monospace", "Consolas"],
    },
    extend: {},
  },
  variants: {
    extend: {
      display: ["group-focus"],
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
