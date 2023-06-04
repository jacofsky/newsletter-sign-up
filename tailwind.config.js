/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      colors: {
        "primary": "hsl(4, 100%, 67%)",
        "dark-slate-grey": "hsl(234, 29%, 20%)",
        "grey": "hsl(231, 7%, 60%)",
        "white": "hsl(0, 0%, 100%)",
        "orange": "#ff6a3a",
        "pink": "#ff527b",
      },
      fontFamily: {
        "roboto": ["Roboto", "sans-serif"],
      }
    },
    plugins: [],
  }