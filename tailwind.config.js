/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textUnderlineOffset: {
        10: '10px',
      },
      screens: {
        'mobileSmall': '320px',
        'mobileMedium': '375px',
        'mobileLarge': '425px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1440px',
      },
    },
  },
  plugins: [],
}