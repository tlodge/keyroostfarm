module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '400px',
      // => @media (min-width: 640px) { ... }

      'md': '907px',
      // => @media (min-width: 768px) { ... }

      'lg': '1333px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1500px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '2000px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      width : {
        "copy": "766px"
      }
    },
    colors: {
      mustard: "#CD9C4B",
      charcoal: "#383840",
      roost: "#496A77",
      white: "#fff",
      grey:"#CBCBCB",
      pink:"#AE2B4D",
      lightblue: "#ACC3CD",
      black: "#000"
    }
    
  },
  variants: {
   
  },
  plugins: [],
}
