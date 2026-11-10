import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: "var(--color-surface)",
        white: "rgb(var(--rgb-white) / <alpha-value>)",
        "surface-muted": "var(--color-surface-muted)",
        ink: "rgb(var(--rgb-ink) / <alpha-value>)",
        secondary: "var(--color-secondary)",
        "accent-text": "var(--color-accent-text)",
        brand: {
          orange: "rgb(var(--rgb-accent) / <alpha-value>)",
          green: "rgb(var(--rgb-whatsapp) / <alpha-value>)",
          ink: "var(--color-ink)",
        },
        border: "var(--color-border)",
        muted: "var(--color-surface-muted)",
        link: "var(--color-accent-text)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"],
      },
    },
  },
  plugins: [],
};

export default config;