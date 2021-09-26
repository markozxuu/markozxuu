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
      boxShadow: {
        magical: '0 0 15px 0 rgb(0 0 0 / 10%)',
        'magical-dark': ' 0 0 0 1px #333',
      },
      animation: {
        'loading-0': 'loading 1.4s ease-in-out infinite',
        'loading-1': 'loading 1.4s ease-in-out 0.2s infinite',
        'loading-2': 'loading 1.4s ease-in-out 0.4s infinite',
      },
      keyframes: {
        loading: {
          '0%': {
            opacity: '.2',
          },
          '20%': {
            opacity: '1',
          },
          to: {
            opacity: '.2',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};
