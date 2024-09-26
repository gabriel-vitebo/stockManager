/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primaryGreen: '#4D7C0F',
      secondaryGreen: '#3C8048',
      warning: '#B17938',
      error: '#9C0D0D',
      primaryButtonBg: '#16A34A',
      secondaryButtonBg: '#636D6B',


      primaryBgDark: '#1E1D1D',
      secondaryBgDark: '#34373D',
      colorDefaultDark: '#D3D3D3'
    },
  },
  plugins: [],
}