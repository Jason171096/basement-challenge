module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: theme => ({
      ...theme('colors'),
      'primary': '#1D1D1D',
      'secondary': '#151515',
     }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
