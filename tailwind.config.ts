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
          window: "#ECE9D8",
          accent: "#0054E3",
          "accent-hover": "#3C81E5",
          border: "#0054E3",
          text: "#000000",
          "text-light": "#FFFFFF",
          "close-hover": "#E81123",
        },
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(80px, 1fr))',
      },
      boxShadow: {
        vista: "0 0 10px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)",
        "vista-window": "2px 2px 6px rgba(0, 0, 0, 0.2)",
      },
      fontFamily: {
        segoe: ["Segoe UI", "sans-serif"],
        tahoma: ["Tahoma", "sans-serif"],
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