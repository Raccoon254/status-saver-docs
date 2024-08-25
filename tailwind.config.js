/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'custom': '#191919',
      },
    },
  },
  plugins: [require('daisyui')],
}

