import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // FK Šumadija 1903 Brand Colors
        primary: {
          DEFAULT: '#003DA5', // Deep royal blue
          light: '#0052D9',
          dark: '#002B73',
        },
        secondary: {
          DEFAULT: '#FFFFFF', // White
          dark: '#F5F5F5',
        },
        accent: {
          green: '#2D5016', // From crest
          orange: '#E67E22', // From crest
        },
        heritage: {
          gold: '#B8860B',
          darkGold: '#8B6914',
        },
      },
      fontFamily: {
        serif: ['Merriweather', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
