/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'happy-orange': '#F4A460',
        'happy-cream': '#FFF5E6',
      },
    },
  },
  plugins: [],
}