module.exports = {
  important: true, // to generate utilities as !important
  content: [ // add the paths to all of your template files
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { // add new font family
        montserrat: ['Helvetica Neue', 'sans-serif']
      }
    },
    colors: { // custom color palette
      primary: '#0142C8',
      secondary: '#EE85B5',
      violet: '#883677',
      congo: '##FF958C',
      success: '#5FC790',
      warning: '#FFA600',
      danger: '#FF5630',
      dark: '#2E3A44',
      info: '#1CA7EC',
      black: '#2E3A44',
      gray: '#858993',
      lightGray: '#EDEDED',
      white: '#FFF',
      bgradian1: "#0142C8",
      bgradian2: "#076EF3",
      bgray: "#EEF0F3",
      borderGray: "#DEDFE2"
    }
  },
  plugins: []
};