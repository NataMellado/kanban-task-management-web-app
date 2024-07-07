import { redirect } from "next/dist/server/api-utils";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', 
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      color: {
        black: "#000112",
        veryDarkGrey: "#20212C",
        darkGrey: "#2B2C37",
        linesDark: "#3E3F4E",
        linesLight: "#E4EBFA",
        mediumGrey: "#828FA3",
        lightGrey: "#F4F7FD",
        white: "#FFFFFF",
        mainPurple: "#635FC7",
        mainPurpleHover: "#A8A4FF",
        red: "#EA5555",
        redHover: "#FF9898",
      },
      fontSize: {
        "headingXL": "24px",
        "headingL": "18px",
        "headingM": "15px",
        "headingS": "12px",
        "bodyL": "13px",
        "bodyM": "12px",
      },
      letterSpacing: {
        "headingS": "2.4px",
      },
      lineHeight: {
        "bodyL": "23px",
      },
    },
  },
  plugins: [],
};
export default config;
