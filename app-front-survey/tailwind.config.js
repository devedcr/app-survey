/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        "customPrimary": "#4C00C8",
        "customSecondary": "#6028D8",
        "select": "#4B70F2",
        "customGrahphic":"#341675b0"
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

