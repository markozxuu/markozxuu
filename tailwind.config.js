module.exports = {
  mode: 'jit',
  darkMode: 'class', // 'media' or 'class'
  purge: ['./components/**/*.tsx', './app/**/*.tsx'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};
