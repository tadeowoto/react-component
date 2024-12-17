/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'lexend': ['Lexend Deca', 'sans-serif'],
        'big': ['Big Shoulders Display', 'cursive']
      }
    },
    colors: {
      'orange': 'hsl(31, 77%, 52%)',
      'cyan': 'hsl(184, 100%, 22%)',
      'dark-cyan': 'hsl(179, 100%, 13%)',
      'transparent-white': 'hsla(0, 0%, 100%, 0.75)',
    },
    fontSize: {
      'body': '15px',
    },
  },
  plugins: [],
}

