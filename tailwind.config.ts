import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["var(--font-antonio)"],
        paragraph: ["var(--font-spartan)"],
      },
      colors: {
        light: "#fff",
        dark: "#070724",
        carbonBlue: "#38384F",
        formalAffair: "#838391",
        mercury: "#419EBB",
        venus: "#EDA249",
        earth: "#6f2ed6",
        mars: "#D14C32",
        jupiter: "#D83A34",
        saturn: "#CD5120",
        uranus: "#1ec2a4",
        neptune: "#2d68f0",
      },
    },
  },
  plugins: [],
};
export default config;
