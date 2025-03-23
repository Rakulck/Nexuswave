/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#06A3DA",
        secondary: "#6B7280",
        accent: "#10B981",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
  darkMode: "class",
  variants: {
    extend: {
      scale: ["group-hover"],
      transform: ["group-hover"],
    },
  },
};
