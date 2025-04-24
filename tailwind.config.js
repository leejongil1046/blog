// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderStyle: {
        dashed: "dashed",
        dotted: "dotted",
        double: "double",
        none: "none",
      },
    },
  },
};
