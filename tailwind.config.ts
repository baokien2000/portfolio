import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "main-gradient": " linear-gradient(rgb(250, 217, 97) 0%, rgb(247, 107, 28) 100%)"
        // "main-gradient": " linear-gradient( rgb(247, 107, 28) 0%,rgb(250, 217, 97) 100%)"
        

      },
      screens: {
        desktop: "1920px", // => @media (min-width: 1920px)
        laptop: "1540px",
        laptopMedium3: "1440px",
        laptopMedium2: "1225px",
        laptopMedium: "1025px",
        tablet: "768px",
        smallTablet: "600px",
        bigPhone: "450px",
        phone: "375px",
        smallPhone: "300px"
    },
    },
  },
  plugins: [],
};
export default config;
