/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C99A0F",
          light: "#E0AE18",
          dim: "#9A760A",
          glow: "rgba(201,154,15,0.18)",
        },
        brown: "#2A2208",
        charcoal: "#111111",
        mid: "#1E1E1E",
        border: "#2C2C2C",
        muted: "#A09880",
        cream: "#F2EFE8",
      },
      fontFamily: {
        display: ["'Bebas Neue'", "sans-serif"],
        condensed: ["'Barlow Condensed'", "sans-serif"],
        body: ["'Barlow'", "sans-serif"],
      },
      animation: {
        marquee: "marquee 24s linear infinite",
        "scroll-line": "scrollLine 2.2s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollLine: {
          "0%, 100%": { opacity: "0.25", transform: "scaleY(0.7)" },
          "50%": { opacity: "1", transform: "scaleY(1)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(22px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      clipPath: {
        skew: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)",
        "skew-sm": "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
      },
    },
  },
  plugins: [],
};
