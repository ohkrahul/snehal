import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "page-bg": "#FAFAFA",
        "card-bg": "#FFFFFF",
        "alt-bg": "#F8F6FF",
        "awards-bg": "#FFFBF0",
        "pink": "#D4537E",
        "pink-light": "#F4C0D1",
        "pink-bg": "#FDF0F5",
        "pink-dark": "#993556",
        "purple": "#7F77DD",
        "purple-light": "#AFA9EC",
        "purple-bg": "#EEEDFE",
        "purple-dark": "#3C3489",
        "teal": "#1D9E75",
        "teal-light": "#9FE1CB",
        "teal-bg": "#E1F5EE",
        "teal-dark": "#085041",
        "gold": "#EF9F27",
        "gold-light": "#FAC775",
        "gold-bg": "#FAEEDA",
        "gold-dark": "#633806",
        "heading": "#1A1A2E",
        "body": "#666666",
        "muted": "#AAAAAA",
        "border-light": "#F0ECF8",
        "navy": "#1A1A2E",
      },
      fontFamily: {
        serif: ["Georgia", "Playfair Display", "serif"],
        sans: ["Inter", "DM Sans", "sans-serif"],
      },
      borderRadius: {
        "card": "14px",
        "pill": "24px",
        "btn": "28px",
      },
      boxShadow: {
        "card": "0 4px 24px rgba(212,83,126,0.08)",
        "card-hover": "0 8px 32px rgba(212,83,126,0.12)",
        "pink-glow": "0 8px 20px rgba(212,83,126,0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
