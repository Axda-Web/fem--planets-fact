import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#fff",
        dark: "#070724",
        carbonBlue: "#38384F",
        formalAffair: "#838391",
        mercure: "#419EBB",
        venus: "#EDA249",
        earth: "#6f2ed6",
        mars: "#D14C32",
        jupiter: "#D83A34",
        saturne: "#CD5120",
        uranus: "#1ec2a4",
        neptune: "#2d68f0",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
