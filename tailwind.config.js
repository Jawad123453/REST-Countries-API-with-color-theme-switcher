/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'Dark-Blue': 'hsl(209, 23%, 22%)',
      'Very-Dark-Blue': 'hsl(207, 26%, 17%)',
      'Very-Dark-Gray': 'hsl(200, 15%, 8%)',
      'Dark-Gray': 'hsl(0, 0%, 52%)',
      'Very-Light-Gray': 'hsl(0, 0%, 98%)',
      'white':'hsl(0,0%,100%)'
    },
    plugins: [],
  }
}
