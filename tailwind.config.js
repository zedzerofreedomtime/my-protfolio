/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
  colors: {
    f1: {
      bg: "#0b0b0b",
      panel: "#111111",
      line: "rgba(255,255,255,0.10)",
      text: "rgba(255,255,255,0.88)",
      muted: "rgba(255,255,255,0.62)",
      orange: "#ff8c00",
    },
  },
}
  },
  plugins: [],
};
