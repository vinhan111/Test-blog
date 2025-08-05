import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        base: "#000000",
        text: "#e9e4d4",
        accent: "#c3ab62",
        subtext: "#bcae85",
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
