module.exports = {
  content: [
    // Paths to templates...
    './src/**/*.{html,js,jsx,ts,tsx}',
    './pages/**/*.{html,js,jsx,ts,tsx}',
    './components/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#9F5F62',
        'secondary': '#EAD6D4',
        'light': '#F6F6F6',
        'medium': '#7B7373',
        'dark': '#494949',
      }
    },
    fontFamily: {
      'sans': ['"Poppins"', 'sans-serif'],
      'hand': ['"Fuggles"', 'cursive'],
    },
    screens: {
      'sm': '320px',
      'md': '426px',
      'lg': '769px',
      'xl': '1025px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // Add your Tailwind CSS plugins here
  ],
}
