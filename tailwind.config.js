/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    screens: {
      lg: '1200px',
      md: '990px',
      sm: '600px',
    },
    extend: {
      fontFamily: {
        tenorSans: ['Tenor Sans', 'sans-serif'],
        libreFranklin: ['Libre Franklin', 'sans-serif'],
        sourceSerif: ['"Source Serif 4"', 'serif'],
      },
      colors: {
        hrGrey: '#E6E6E6',
        lightGrey: '#999999',
        grey: '#666666',
        footerGrey: '#141414',
      },
      fontSize: {
        header: [
          '13px',
          {
            lineHeight: '22px',
            letterSpacing: '0.5px',
            fontWeight: '700',
          },
        ],
        title: [
          '20px',
          {
            lineHeight: '24px',
            fontWeight: '400',
          },
        ],
        footerCategory: [
          '14px',
          {
            lineHeight: '24px',
            fontWeight: '400',
          },
        ],
      },
      maxWidth: {
        contentPicture: '387px',
        latestPostsPicture: '285px',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
