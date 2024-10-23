/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure this path is correct
    "./public/index.html", // Include your HTML file if needed
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', "sans-serif"], // Add Roboto as a custom font
      },
    },
  },
  plugins: [],
};
