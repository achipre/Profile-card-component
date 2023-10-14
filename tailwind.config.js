/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        'dark-cyan': 'hsl(185, 75%, 39%)',
        'very-dark-blue': 'hsl(229, 23%, 23%)',
        'dark-grayish-blue': 'hsl(227, 10%, 46%)',
        'dark-gray': 'hsl(0, 0%, 59%)'
      },
      fontFamily: {
        'kumbh': ['Kumbh Sans', 'sans-serif']
      },
      backgroundImage: {
        'pattertop': "url('./src/assets/bg-pattern-top.svg')",
        'patterbotton': "url('./src/assects/bg-pattern-bottom.svg')"
      }
    }
  },
  plugins: []
}

