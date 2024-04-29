/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "heading-xl": ["24px", "30px"],
        "heading-lg": ["18px", "23px"],
        "heading-md": ["15px", "19px"],
        "heading-sm": ["12px", "15px", "2.4px"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "rgb(var(--color-white), <alpha-value>)",
      black: "rgb(var(--color-black), <alpha-value>)",
      primary: "rgb(var(--color-primary), <alpha-value>)",
      primaryLight: "rgb(var(--color-primary-light), <alpha-value>)",
      navbar: {
        text: "rgb(var(--color-navbar-text), <alpha-value>)",
        bg: "rgb(var(--color-navbar-bg), <alpha-value>)",
        border: "rgb(var(--color-navbar-border), <alpha-value>)",
        selected: {
          text: "rgb(var(--color-navbar-selected-text), <alpha-value>)",
          bg: "rgb(var(--color-navbar-selected-bg), <alpha-value>)",
        },
        new: "rgb(var(--color-navbar-new), <alpha-value>)",
      },
      button: {
        bg: "rgb(var(--color-button-bg), <alpha-value>)",
        text: "rgb(var(--color-button-text), <alpha-value>)",
        hover: "rgb(var(--color-button-hover), <alpha-value>)",
      },
    },
  },
  plugins: [],
};
