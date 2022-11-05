module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "rock-salt": ["rock-salt"],
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
