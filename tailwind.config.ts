import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { ivory: "#FDFBF7", crimson: { 700: "#791D31", 800: "#5B1326", 900: "#3D0B19" }, gold: { 300: "#F6D77A", 400: "#D9AE45", 500: "#A7771D" }, marigold: "#E18D25", emerald: "#174D3C" }, fontFamily: { display: ["Georgia", "serif"], serif: ["Georgia", "serif"] }, boxShadow: { royal: "0 24px 70px rgba(39, 7, 16, .38)" }, backgroundImage: { "royal-radial": "radial-gradient(circle at top, #8a2a42 0%, #5B1326 46%, #3D0B19 100%)" } } },
  plugins: []
} satisfies Config;