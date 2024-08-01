import { redirect } from "next/dist/server/api-utils";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000112",
        veryDarkGrey: "#20212C",
        darkGrey: "#2B2C37",
        linesDark: "#3E3F4E",
        linesLight: "#E4EBFA",
        mediumGrey: "#828FA3",
        mediumGrey2: "#828FA31A",
        lightGrey: "#F4F7FD",
        white: "#FFFFFF",
        mainPurple: "#635FC7",
        mainPurpleHover: "#A8A4FF",
        lightPurple: "#635FC71A",
        red: "#EA5555",
        redHover: "#FF9898",
      },
      fontSize: {
        headingXL: "24px",
        headingL2: "21px",
        headingL: "18px",
        headingM: "15px",
        headingSM: "13px",
        headingS: "12px",
        bodyL: "13px",
        bodyM: "12px",
      },
      letterSpacing: {
        headingS: "2.4px", //tracking-headingS
      },
      lineHeight: {
        bodyL: "23px", //leading-bodyL
      },
      spacing: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        6.5: "1.625rem",
        7.5: "1.875rem",
        8.5: "2.125rem",
        9.5: "2.375rem",
        10.5: "2.625rem",
        14: "3.5rem",
        18: "4.5rem",
        36: "9rem",
        72.5: "16rem",
        70: "17.5rem",
        75: "18.75rem",
        80: "20rem",
      },
      transitionProperty: {
        width: "width"
      },
      zIndex: {
        '100': '100',
        '110': '110',
      },
      screens: {
        'md': '960px',
      }
    },
  },
  plugins: [],
};
export default config;
