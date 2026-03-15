/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0F0F0E',
        primary: '#E8E4DC',
        accent: '#3B4F3A',
        surface: 'rgba(232, 228, 220, 0.06)',
        muted: '#C8C3B8',
        border: '#1A1A18',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        drama: ['"Cormorant Garamond"', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
