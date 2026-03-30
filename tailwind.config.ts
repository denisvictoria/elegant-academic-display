import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1100px",
      },
    },
    extend: {
      fontFamily: {
        serif: ["Crimson Pro", "Georgia", "serif"],
        sans: ["Inter", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        contractor: {
          DEFAULT: "hsl(var(--contractor))",
          light: "hsl(var(--contractor-light))",
          bg: "hsl(var(--contractor-bg))",
        },
        hennart: {
          DEFAULT: "hsl(var(--hennart))",
          light: "hsl(var(--hennart-light))",
          bg: "hsl(var(--hennart-bg))",
        },
        berry: {
          DEFAULT: "hsl(var(--berry))",
          bg: "hsl(var(--berry-bg))",
        },
        gold: {
          DEFAULT: "hsl(var(--gold))",
          light: "hsl(var(--gold-light))",
        },
        stage1: "hsl(var(--stage1))",
        stage2: "hsl(var(--stage2))",
        stage3: "hsl(var(--stage3))",
        surface: {
          warm: "hsl(var(--surface-warm))",
          cool: "hsl(var(--surface-cool))",
          dark: "hsl(var(--surface-dark))",
          "dark-accent": "hsl(var(--surface-dark-accent))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "academic": "var(--shadow-sm)",
        "academic-md": "var(--shadow-md)",
        "academic-lg": "var(--shadow-lg)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "bounce-gentle": {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-8px)" },
          "60%": { transform: "translateY(-4px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "bounce-gentle": "bounce-gentle 2s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
