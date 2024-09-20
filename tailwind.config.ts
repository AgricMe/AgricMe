const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#25196B",
        customPink: "#D994A7",
        customDeepBlue: "#25196B",
        customLightBlue: "#94D9CD",
      },
    },
  },
  plugins: [require("daisyui")],
};

export default config;
