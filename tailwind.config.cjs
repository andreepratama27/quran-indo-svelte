/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      boxShadow: {
        'skew': '4px 4px rgba(0,0,0,1)'
      },
    },
  },
  plugins: [],
}
