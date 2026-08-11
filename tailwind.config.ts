import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        secondary: '#7c3aed',
        accent: '#f59e0b',
        dark: '#1f2937',
        light: '#f9fafb',
      },
      fontFamily: {
        arabic: ['Cairo', 'sans-serif'],
        english: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
