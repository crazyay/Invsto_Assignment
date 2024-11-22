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
        "soft-cyan": "hsl(174, 77%, 80%)",
        "strong-cyan": "hsl(174, 86%, 45%)",
        "light-grayish-red": "hsl(14, 92%, 95%)",
        "light-red": "hsl(15, 100%, 70%)",
        "pale-blue": "hsl(226, 100%, 87%)",
        "light-grayish-blue": "hsl(224, 65%, 95%)",
        "grayish-blue": "hsl(225, 20%, 60%)",
        "dark-desaturated-blue": "hsl(227, 35%, 25%)",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
