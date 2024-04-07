/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // tailwind là responsive mobile first
      // ta có thể config lại ở đây để có thể chuyển sang res desktop first
    },
  },
  plugins: [],
};

// B1 : npm install -D tailwindcss
//b2 : npx tailwindcss init
// b3 :
