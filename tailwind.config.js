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
      red: "rgb(var(--color-red-200), <alpha-value>)",
      'light-red': "rgb(var(--color-red-100), <alpha-value>)",
      primary: "rgb(var(--color-primary), <alpha-value>)",
      primaryLight: "rgb(var(--color-primary-light), <alpha-value>)",
      gray: {
        300: "rgb(var(--color-gray-300), <alpha-value>)",
        400: "rgb(var(--color-gray-400), <alpha-value>)",
        500: "rgb(var(--color-gray-500), <alpha-value>)",
        600: "rgb(var(--color-gray-600), <alpha-value>)",
        700: "rgb(var(--color-gray-700), <alpha-value>)",
        800: "rgb(var(--color-gray-800), <alpha-value>)",
        900: "rgb(var(--color-gray-900), <alpha-value>)",
      },
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
      input: {
        border: "rgba(var(--color-input-border), 0.25)",
      }, 
      button: {
        bg: "rgb(var(--color-button-bg), <alpha-value>)",
        text: "rgb(var(--color-button-text), <alpha-value>)",
        hover: "rgb(var(--color-button-hover-bg), <alpha-value>)",
        destructive: {
          bg: "rgb(var(--color-button-destructive-bg), <alpha-value>)",
          text: "rgb(var(--color-button-destructive-text), <alpha-value>)",
          hover: "rgb(var(--color-button-destructive-hover-bg), <alpha-value>)",
        },
        secondary: {
          bg: "rgba(var(--color-button-bg), 0.1)",
          text: "rgba(var(--color-button-bg), <alpha-value>)",
          hover: "rgba(var(--color-button-hover-bg), 0.25)",
        },
      },
    },
  },
  plugins: [],
};
