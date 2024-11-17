/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      'sans': ['Lato', 'sans-serif'],
      'body': ['Lato', 'sans-serif'],
    },
    extend: {
      colors: {
        white: "hsl(var(--white))",
        dark: "hsl(var(--dark))",
        lightgray: "hsl(var(--lightgray))",
        blue : "hsl(var(--blue))",
        green: "hsl(var(--green))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    }
  },
}

