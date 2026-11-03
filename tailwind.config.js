/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'mo-ink': '#1F1433',
        'mo-violet': '#34205C',
        'mo-btn': '#3B2366',
        'mo-violet-2': '#4B2E83',
        'mo-lav': '#EDE6F9',
        'mo-lav-50': '#F7F4FC',
        'mo-line': '#E6DFF3',
        'mo-muted': '#6C6282',
        'mo-pink': '#F2B8C6',
        'mo-pink-bg': '#FBE7EE',
        'mo-pink-ink': '#9B2E5A',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'mo-card': '0 2px 10px rgba(31, 20, 51, 0.04)',
        'mo-hover': '0 8px 24px rgba(31, 20, 51, 0.08)',
        'mo-popup': '0 12px 36px rgba(31, 20, 51, 0.12)',
      }
    },
  },
  plugins: [],
};

