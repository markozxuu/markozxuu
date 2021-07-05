module.exports = {
  mode: 'jit',
  darkMode: 'class', // 'media' or 'class'
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'black-vercel': '#131415',
        'gray-vercel': '#666',
        'accent-2': '#333',
        'accent-3': '#eaeaea',
        'accent-4': '#888',
        'accent-5': '#A1A1AA',
        'accent-6': '#e5e7eb',
        'accent-8': '#374151',
        'accent-9': '#999',
        'line-gray-dark': '#444',
        'line-gray-light': '#dedede',
        'red-light': '#FF1A1A',
        'red-dark': '#C50000',
        'code-dark': '#1a1a1a',
        'code-white': '#fafafa',
      },
      fontFamily: {
        inter: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
        ],
        cascadiaCode: [
          'Cascadia Code',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};
