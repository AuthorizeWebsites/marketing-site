module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
      },
    },
    typography: {
      default: {
        css: {
          a: {
            color: "rgb(255, 90, 31);",
            "&:hover": {
              color: "rgb(208, 56, 1);",
            },
          },
        },
      },
      sm: {
        css: {
          a: {
            color: "rgb(255, 90, 31);",
            "&:hover": {
              color: "rgb(208, 56, 1);",
            },
          },
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui"), require("@tailwindcss/typography")],
};
