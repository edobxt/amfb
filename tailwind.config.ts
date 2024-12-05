import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        festival: {
          50: "#ecfdff",
          100: "#e2f9ff",
          200: "#c3f0ff",
          300: "#96d6e5",
          400: "#418fae",
          500: "#0391b2",
          600: "#0891b2",
          700: "#06738d",
          800: "#055568",
          900: "#043743",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
