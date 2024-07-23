

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': { 'max': '320px' }, // Define un breakpoint para pantallas de 320 px o menos
      },
      keyframes: {
        toLeft: {
          '0%': { transform: 'translateX(11%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        toRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(11%)' }
        }
      },
      animation: {
        toLeft120: 'toLeft 120s linear infinite',
        toRight120: 'toRight 120s linear infinite'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('tailwind-scrollbar-hide')
  ],
}