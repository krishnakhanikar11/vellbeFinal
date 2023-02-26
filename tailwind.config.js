 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        primary: "#2F4424",
        secondary: "#5CB32C",
        dimGreen: "rgba(246, 251, 244, 1)",
        greenPara: "#5C784D",
        btnColor: "#2D5616"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        arapey : ["Arapey", "serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
