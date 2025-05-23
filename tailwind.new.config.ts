module.exports = {
  content: ["./src/app/(old-design)/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#93c5fd", // Blue 300
          DEFAULT: "#3b82f6", // Blue 500
          dark: "#1e40af", // Blue 800
        },
        secondary: {
          light: "#cbd5e1", // Slate 300
          DEFAULT: "#64748b", // Slate 500
          dark: "#334155", // Slate 700
        },
        background: {
          light: "#f8fafc", // Light gray-blue
          DEFAULT: "#f1f5f9", // Light gray-blue
          dark: "#e2e8f0", // Gray-blue
        },
        accent: {
          light: "#fca5a5", // Red 300
          DEFAULT: "#ef4444", // Red 500
          dark: "#b91c1c", // Red 700
        },
        muted: {
          light: "#e2e8f0", // Slate 200
          DEFAULT: "#94a3b8", // Slate 400
          dark: "#475569", // Slate 600
        },
        success: "#22c55e", // Green 500
        warning: "#f59e0b", // Amber 500
        error: "#dc2626", // Red 600
        info: "#0ea5e9", // Sky 500
      },
      fontFamily: {
        serif: ["Merriweather", "serif"],
        sans: ["Arial", "sans-serif"],
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(0,0,0,0.1)",
        strong: "0 4px 6px rgba(0,0,0,0.3)",
      },
      borderRadius: {
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        lg: "0.5rem",
      },
    },
  },
  plugins: [],
};
