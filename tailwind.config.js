/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        gilda: ['Gilda Display', 'serif'],
        barlow: ['Barlow', 'serif'],
        condensed: ['Condensed', 'serif']
      },
      colors: {
        primary: '#AA8453',
        whiteGold: '#F8F5F0',
        tableHeader: '#DDCEBA',
        panelOrange50: '#fef8ec',
        panelOrange100: '#fceac9',
        panelOrange200: '#f7c873',
        panelOrange300: '#f5b654',
        panelOrange400: '#f39c2c',
        panelOrange500: '#ec7a14'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: false, // dark theme is disabled now. to enable it set darkTheme as: dark.
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true // Shows info about daisyUI version and used config in the console when building your CSS
  }
};
