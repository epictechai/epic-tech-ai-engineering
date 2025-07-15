import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // If you use the pages router
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // For the app router
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // Add custom theme extensions here if needed for the "cyberpunk aesthetic"
      // For example:
      colors: {
        'cyber-purple': '#7B00FF',
        'cyber-pink': '#FF00FF',
        'cyber-blue': '#00FFFF',
        'dark-bg': '#0A0A0A',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
