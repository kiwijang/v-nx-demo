console.log('tailwind ❤️');

module.exports = {
  prefix: '',
  content: [
    './apps/**/*.{html, ts, scss, css, vue, js}',
    './libs/**/*.{html, ts, scss, css, vue, js}',
    './main.scss',
  ],
  theme: {
    extend: {
      // width: {
      //   navBar: '232px',
      // },
      // height: {
      //   topBar: '60px',
      //   nowPlayingBar: '90px',
      // },
      colors: {
        primary: '#6D73B0',
        secondary: '#D1DAE7',
        'secondary-dark': '#9CA9C0',
        'primary-light': '#B0B2E2',
      },
    },
  },
  plugins: [],
};
