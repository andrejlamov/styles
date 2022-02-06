module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Fira Sans", "sans-serif"],
    },
    screens: { md: "892px" }, // This is the width of the Navigationbar and acts as max width for the main content.
  },
  variants: {},
  plugins: [],
};
