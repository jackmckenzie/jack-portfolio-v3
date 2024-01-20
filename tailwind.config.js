/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: ({ theme }) => ({
        header: `0 0 1px 0 ${theme('colors.emerald.500')}`,
      }),
    },
  },
  plugins: [],
};
