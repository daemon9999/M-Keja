/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: '#333333',
        primary: '#2E3192',
        'primary-2': '#F7941D',
        success: '#1A9447',
        pending: '#F29339',
        destructive: '#941A1A'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
};
