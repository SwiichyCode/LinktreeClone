import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "logo-mobile": "url('/logo-devlinks-small.svg')",
        "logo-desktop": "url('/logo-devlinks-large.svg')",
      },
      backgroundColor: {
        primary: "#FAFAFA",
        purple: "#633CFF",
        "purple-hover": "#BEADFF",
        "purple-hover-secondary": "#EFEBFF",
      },
      colors: {
        grey: "#737373",
        darkgrey: "#333333",
        purple: "#633CFF",
      },
      borderColor: {
        input: "#D9D9D9",
        "input-focus": "#633CFF",
        error: "#FF3939",
      },
      caretColor: {
        input: "#633CFF",
      },
      boxShadow: {
        "input-focus": "0px 0px 32px 0px rgba(99, 60, 255, 0.25)",
        active: "0px 0px 32px 0px rgba(99, 60, 255, 0.25)",
      },
      minHeight: {
        "board-mobile": "calc(100vh - 74px - 2rem)",
        "board-desktop": "calc(100vh - 110px - 2.5rem)",
      },
    },
  },
  plugins: [],
};
export default config;
