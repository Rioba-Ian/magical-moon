import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
 return ({ opacityValue }) => {
  if (opacityValue !== undefined) {
   return `hsla(var(${variableName}), ${opacityValue})`;
  }
  return `hsl(var(${variableName}))`;
 };
}

export default {
 content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
 theme: {
  extend: {
   gridTemplateColumns: {
    "container-4":
     "minmax(2rem, 1fr) repeat(2, minmax(0, 40rem)) minmax(2rem, 1fr)",
   },
   fontFamily: {
    "font-serif": "var(--ff-serif);",
    "font-sans-cond": "var(--ff-sans-cond);",
    "font-sans-normal": "var(--ff-sans-serif);",
   },
   backgroundColor: {
    dark: withOpacity("--clr-dark"),
    accent: withOpacity("--clr-light"),
    white: withOpacity("--clr-white"),
   },
   textColor: {
    dark: withOpacity("--clr-dark"),
    accent: withOpacity("--clr-light"),
    white: withOpacity("--clr-white"),
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
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.75rem",
    "2xl": [
     "2rem",
     {
      lineHeight: 1.1,
     },
    ],
    "3xl": [
     "3.5rem",
     {
      lineHeight: 1.1,
     },
    ],
    "4xl": [
     "6.25rem",
     {
      lineHeight: 1.1,
     },
    ],
    "5xl": [
     "9.375rem",
     {
      lineHeight: 1.1,
     },
    ],
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
