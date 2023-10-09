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
      },
      backgroundImage: {
        filter: "url('/images/filter-section-img.png')",
        'city-1': "url('/images/neighbourhoods/city-1.png')",
        'city-2': "url('/images/neighbourhoods/city-2.png')",
        'city-3': "url('/images/neighbourhoods/city-3.png')"
      },
      fontSize: {
        '3.75': '0.9375rem'
      }
    },
  },
  plugins: [],
};
