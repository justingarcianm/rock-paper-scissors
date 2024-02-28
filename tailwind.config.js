/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      scissors: "hsl(39, 89%, 49%) to hsl(40, 84%, 53%)",
      paper: "hsl(230, 89%, 62%) to hsl(230, 89%, 65%)",
      lizard: "hsl(261, 73%, 60%) to hsl(261, 72%, 63%)",
      radial: "hsl(214, 47%, 23%) to hsl(237, 49%, 15%)",
      cyan: "hsl(189, 59%, 53%) to hsl(189, 58%, 57%)",
      dark: "hsl(229, 25%, 31%)",
      score: "hsl(229, 64%, 46%)",
      header: "hsl(217, 16%, 45%)",
    },
    fontFamily: {
      barlow: ["Barlow Semi Condensed", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
