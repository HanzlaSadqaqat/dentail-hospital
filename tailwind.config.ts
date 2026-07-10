import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0C2B30",
        petrol: { DEFAULT: "#0E4D52", 700: "#0A3A3E", 900: "#082A2D" },
        aqua: { DEFAULT: "#19B5A0", soft: "#D9F3EE", 300: "#7FD9CC" },
        coral: { DEFAULT: "#FF7A59", 600: "#F2613F" },
        sand: "#FBF8F3",
        cloud: "#EFF5F4",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: { "4xl": "2rem", "5xl": "2.75rem" },
      boxShadow: {
        soft: "0 18px 50px -20px rgba(10, 58, 62, 0.28)",
        card: "0 10px 40px -22px rgba(10, 58, 62, 0.35)",
      },
      maxWidth: { container: "1200px" },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: { "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both" },
    },
  },
  plugins: [],
};
export default config;
