import {
  gray,
  cyan,
  cyanA,
  jade,
  violet,
  tomato,
  plum,
} from "@radix-ui/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...gray,
        ...cyan,
        ...cyanA,
        ...jade,
        ...violet,
        ...tomato,
        ...plum,
      },
      fontFamily: {
        sans: ["Matter", "sans-serif"],
      },
      height: {
        a4: "297mm",
      },
      width: {
        a4: "210mm",
      },
    },
  },
  plugins: [],
};
