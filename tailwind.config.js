/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: 'hsl(0, 0%, 100%)',
      green: 'hsl(75, 94%, 57%)',
      grey: {
        700: 'hsl(0, 0%, 20%)',
        800: 'hsl(0, 0%, 12%)',
        900: 'hsl(0, 0%, 8%)',
      },
    },
    extend: {
      fontFamily: {
        Inter: '"Inter", sans-serif',
      },
    },
  },
  plugins: [],
};
