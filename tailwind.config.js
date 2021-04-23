module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
      lightblue: "#ACC3CD"
    }
    
  },
  variants: {
   
  },
  plugins: [],
}
