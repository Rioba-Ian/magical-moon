/** @type {import('tailwindcss').Config} */
export default {
 content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
 theme: {
  extend: {
   fontFamily: {
    "font-serif": "var(--ff-serif);",
    "font-sans-cond": "var(--ff-sans-cond);",
    "font-sans-normal": "var(--ff-sans-serif);",
   },
   backgroundColor: {
    dark: "hsl(var(--clr-dark));",
    accent: "hsl(var(--clr-light));",
    white: "hsl(var(--clr-white));",
   },
   textColor: {
    dark: "hsl(var(--clr-dark));",
    accent: "hsl(var(--clr-light));",
    white: "hsl(var(--clr-white));",
   },
   fontSize: {
    fs900: "var(--fs-900);",
    fs800: "var(--fs-800);",
    fs700: "var(--fs-700);",
    fs600: "var(--fs-600);",
    fs500: "var(--fs-500);",
    fs400: "var(--fs-400);",
    fs300: "var(--fs-300);",
    fs200: "var(--fs-200);",
    fs100: "var(--fs-100);",
   },
   letterSpacing: {
    letterSpacing1: "4.75px",
    letterSpacing2: "2.7px",
    letterSpacing3: "2.35px",
   },
  },
 },
 plugins: [],
};
