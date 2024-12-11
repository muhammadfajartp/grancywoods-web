/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            sans: ["Public sans", "sans-serif"], // Default untuk sans-serif
         },
      },
   },
   plugins: [],
};
