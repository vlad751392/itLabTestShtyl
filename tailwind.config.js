const {
  blue,
  gray
} = require('./src/constants/colors');

module.exports = {
  content: ['./src/**/*.{html,tsx,js}'],
  theme: {
    extend: {
      colors: {
        gray,
        blue,
      },
      boxShadow: {
        'primary-button-shadow': '0 0 0 4px #277697, 0 0 0 0 #277697',
        'secondary-button': '0 0 0 4px #313032, 0 0 0 0 #313032'
      },
      fontFamily: {
        'droid-sand': ['DroidSans', 'sans-serif'],
      },
      animation: {
        'open-menu': 'open-menu 1.5s forwards',
        'close-menu': 'close-menu 1.5s forwards',
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'translateY(-294%)' },
          '100%': { transform: 'translateY(-146%)' },
        },
        'close-menu': {
          '0%': { transform: 'translateY(-146%)' },
          '100%': { transform: 'translateY(-294%)'} ,
        }
      }
    }
  },
  plugins: []
};
