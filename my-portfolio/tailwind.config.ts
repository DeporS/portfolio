/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
    ],
    theme: {
      extend: {
        animation: {
          fadeIn: 'fadeIn 3s ease-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
        },
      },
    },
    plugins: [],
  };
  