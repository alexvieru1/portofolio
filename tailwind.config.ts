import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        xxs: "clamp(0.75rem, 0.5vw + 0.5rem, 0.875rem)",
        xs: "clamp(0.75rem, 0.5vw + 0.5rem, 0.875rem)",
        sm: "clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)",
        md: "clamp(1rem, 0.34vw + 0.91rem, 1.19rem)",
        lg: "clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)",
        xl: "clamp(1.56rem, 1vw + 1.31rem, 2.11rem)",
        "2xl": "clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)",
        "3xl": "clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)",
        "4xl": "clamp(3.05rem, 3.54vw + 2.17rem, 5rem)",
        "5xl": "clamp(3.81rem, 5.18vw + 2.52rem, 6.66rem)",
        "6xl": "clamp(4.77rem, 7.48vw + 2.9rem, 8.88rem)",
        "7xl": "clamp(5.96rem, 10.2vw + 3.3rem, 11.5rem)",
        "8xl": "clamp(7.45rem, 13.8vw + 3.73rem, 14.5rem)",
        "9xl": "clamp(9.31rem, 17.8vw + 4.19rem, 17.5rem)",
      },
      screens: {
        "4xs": "160px",
        // => @media (min-width: 160px) { ... }
  
        "3xs": "240px",
        // => @media (min-width: 240px) { ... }
  
        "2xs": "320px",
        // => @media (min-width: 320px) { ... }
  
        xs: "480px",
        // => @media (min-width: 480px) { ... }
  
        sm: "640px",
        // => @media (min-width: 640px) { ... }
  
        md: "768px",
        // => @media (min-width: 768px) { ... }
  
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
  
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
  
        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
export default config;
