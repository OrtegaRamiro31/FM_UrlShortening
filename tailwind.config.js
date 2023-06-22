/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primaryViolet: 'hsl(257, 27%, 26%)',
        primaryCyan: 'hsl(180, 66%, 49%)',
        secondaryRed: 'hsl(0, 87%, 67%)',
        neutralGray: 'hsl(0, 87%, 67%)',
        neutralGrayishViolet: 'hsl(257, 7%, 63%)',
        neutralVeryDarkBlue: 'hsl(255, 11%, 22%)',
        neutralVeryDarkViolet: 'hsl(260, 8%, 14%)',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif']
      },
      fontSize: {
        bodyCopy: ['18px', '1rem'],
      },
    },
  },
  plugins: [],
}

