/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#080912",
        // secondary: '#161A30',
        secondary: "#0e0f1a",
        tertiary: '#B6BBC4',
        textColor: '#F0ECE5' 
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        'source-code-pro': ['"Source Code Pro"', 'monospace'],
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
      },

    },
  },
  plugins: [],
}

