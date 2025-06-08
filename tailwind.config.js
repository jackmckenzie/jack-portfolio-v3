import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        jost: ['Jost', ...defaultTheme.fontFamily.sans],
        jakarta: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: ({ theme }) => ({
        header: `0 0 1px 0 ${theme('colors.emerald.500')}`,
      }),
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
};
