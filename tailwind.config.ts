import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        vista: {
          pearl: "#E3EAF3",
          taskbar: "#1F3B7B",
          window: "#FFFFFF",
          accent: "#0078D7",
          border: "#8BA0BC",
          text: "#000000",
          "text-light": "#FFFFFF",
        },
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(80px, 1fr))',
      },
      boxShadow: {
        vista: "0 0 10px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)",
        "vista-window": "0 4px 18px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        segoe: ["Segoe UI", "sans-serif"],
      },
      animation: {
        "window-open": "windowOpen 0.3s ease-out",
        "window-minimize": "windowMinimize 0.2s ease-in",
      },
      keyframes: {
        windowOpen: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        windowMinimize: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.95)", opacity: "0" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;