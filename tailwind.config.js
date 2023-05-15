/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      screens: {
        small: "300px",
        sms: "360px",
        sm: "380px",
      },
      fontFamily: {
        Merienda: ["Merienda", "cursive"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#396C03",
        black: "#3F3F3F",
        secondary: "#FF8B00",
        para: "#676767",
        inputclr: "#C7C7C7",
        lighttxt: "#DEDEDE",
      },
    },
  },
  plugins: [],
};
