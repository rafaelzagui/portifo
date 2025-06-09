import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Custom green theme colors
        "green-principal": "var(--color-bg-principal)",
        "green-secundaria": "var(--color-bg-secundaria)",
        "green-botao": "var(--color-botao)",
        "green-detalhe": "var(--color-detalhe)",
        "green-destaque": "var(--color-destaque)",
        "green-header": "var(--color-header)",
        "green-texto": "var(--color-texto)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 20px var(--color-destaque)",
          },
          "50%": {
            boxShadow: "0 0 40px var(--color-destaque)",
          },
        },
        "pulse-slow": {
          "0%, 100%": {
            opacity: "0.2",
          },
          "50%": {
            opacity: "0.4",
          },
        },
        "pulse-slower": {
          "0%, 100%": {
            opacity: "0.1",
          },
          "50%": {
            opacity: "0.25",
          },
        },
        "pulse-fast": {
          "0%, 100%": {
            opacity: "0.5",
          },
          "50%": {
            opacity: "1",
          },
        },
        "gradient-bg": {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
        "text-gradient": {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
        typewriter: {
          "0%": {
            width: "0",
          },
          "100%": {
            width: "100%",
          },
        },
        "bounce-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.3)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.05)",
          },
          "70%": {
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "slide-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "fade-in-left": "fade-in-left 0.6s ease-out",
        "fade-in-right": "fade-in-right 0.6s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        "delayed-fade-in": "fade-in 0.8s ease-out 0.2s both",
        "delayed-fade-in-2": "fade-in 0.8s ease-out 0.4s both",
        "delayed-fade-in-3": "fade-in 0.8s ease-out 0.6s both",
        "pulse-slow": "pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-slower": "pulse-slower 7s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-fast": "pulse-fast 0.7s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient-bg": "gradient-bg 8s ease-in-out infinite",
        "text-gradient": "text-gradient 4s ease-in-out infinite",
        typewriter: "typewriter 3s ease-in-out 1s both",
        "bounce-in": "bounce-in 0.8s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
      },
      animationDelay: {
        "0": "0s",
        "100": "0.1s",
        "200": "0.2s",
        "300": "0.3s",
        "400": "0.4s",
        "500": "0.5s",
        "600": "0.6s",
        "700": "0.7s",
        "800": "0.8s",
        "900": "0.9s",
        "1000": "1s",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
