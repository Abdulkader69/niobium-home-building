module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#f0106e',
      },
      width: {
        'calc-100-66': 'calc(100% - 66rem)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
