const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
  ],
  theme: {
    // colors: {
    //   black : '#274C5B',
    //   yellow : '#EFD372',
    //   green : '#7EB693',
    //   white : '#ffff'
    // },
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
}

export default config

