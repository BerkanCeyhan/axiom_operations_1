/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: 'var(--bg)',
        primary: 'var(--text-primary)',
        accent: 'var(--accent)',
        surface: 'var(--surface)',
        muted: 'var(--text-muted)',
        border: 'var(--border)',
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
