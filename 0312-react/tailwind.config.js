/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        normal: "hsl(60, 12%, 60%)",
        fighting: "hsl(0, 64%, 47%)",
        flying: "hsl(230, 56%, 66%)",
        poison: "hsl(300, 44%, 50%)",
        ground: "hsl(42, 42%, 55%)",
        rock: "hsl(45, 42%, 46%)",
        bug: "hsl(64, 68%, 40%)",
        ghost: "hsl(254, 14%, 41%)",
        steel: "hsl(210, 10%, 76%)",
        fire: "hsl(20, 79%, 56%)",
        water: "hsl(216, 60%, 60%)",
        grass: "hsl(100, 36%, 52%)",
        electric: "hsl(52, 93%, 64%)",
        psychic: "hsl(336, 72%, 63%)",
        ice: "hsl(180, 42%, 70%)",
        dragon: "hsl(248, 75%, 56%)",
        dark: "hsl(220, 10%, 30%)",
        fairy: "hsl(330, 48%, 73%)",
        unknown: "hsl(0, 0%, 75%)",
        shadow: "hsl(254, 14%, 41%)",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
