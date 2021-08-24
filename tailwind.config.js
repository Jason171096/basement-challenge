module.exports = {
  mode: 'jit', 
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: theme => ({
      ...theme('colors'),
      'primary': '#1D1D1D',
      'secondary': '#151515',
     }),
    extend: {
      animation: {
        'text-slide': 'text-slide 20s linear infinite',
      },
      keyframes: {
        'text-slide': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
}
