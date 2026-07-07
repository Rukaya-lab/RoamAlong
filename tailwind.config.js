/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#26231f",
        clay: "#d95f43",
        moss: "#64715d",
        oat: "#f6f0e7",
        linen: "#fbf8f2",
        paper: "#fffdf8",
        graphite: "#514b43"
      },
      boxShadow: {
        soft: "0 22px 70px rgba(38, 35, 31, 0.10)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      }
    },
  },
  plugins: [],
};
