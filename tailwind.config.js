/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "padding-hr": "4rem",
      },
      colors: {
        primary: {
          100: "#151730",
          950: "#050612",
        },

        customAmber: {
          50: "#FFFCF2",
          100: "#e6e4dc",
        },

        customPurple: {
          300: "#4936DC",
          400: "#110CA9",
        },

        customGray: {
          100: "#616161",
        },
      },
    },
  },
  plugins: [],
};
