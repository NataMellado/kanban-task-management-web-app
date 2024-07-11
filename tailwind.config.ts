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
        headingL: "18px",
        headingM: "15px",
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
        72.5: "18.125rem",
      },
      transitionProperty: {
        width: "width"
      }
    },
  },
  plugins: [],
};
export default config;
