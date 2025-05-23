module.exports = {
  content: ["./src/app/(new-design)/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#6ee7b7", // Emerald 300
          DEFAULT: "#10b981", // Emerald 500
          dark: "#047857", // Emerald 700
        },
        secondary: {
          light: "#93c5fd", // Blue 300
          DEFAULT: "#3b82f6", // Blue 500
          dark: "#1e40af", // Blue 700
        },
        background: {
          light: "#f0fdf4", // Light green
          DEFAULT: "#ecfccb", // Light lime green
          dark: "#d9f99d", // Lime green
        },
        accent: {
          light: "#fcd34d", // Amber 300
          DEFAULT: "#f59e0b", // Amber 500
          dark: "#b45309", // Amber 700
        },
        muted: {
          light: "#d1d5db", // Gray 300
          DEFAULT: "#6b7280", // Gray 500
          dark: "#374151", // Gray 700
        },
        danger: "#ef4444", // Red 500
        success: "#22c55e", // Green 500
        warning: "#f97316", // Orange 500
        info: "#3b82f6", // Blue 500
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        mono: ["Fira Code", "monospace"],
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
        112: "28rem",
      },
      boxShadow: {
        subtle: "0 2px 4px rgba(16,185,129,0.2)",
        strong: "0 10px 15px rgba(16,185,129,0.4)",
      },
      borderRadius: {
        sm: "0.2rem",
        DEFAULT: "0.375rem",
        lg: "0.75rem",
        xl: "1rem",
      },
    },
  },
  plugins: [],
};
