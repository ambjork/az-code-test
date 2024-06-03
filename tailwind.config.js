/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    container: {
      center: true,
    },
    text: {
      center: true,
    },
    extend: {
      fontSize: {
        h1: "3.5rem", //56px
        h2: "2.5rem", // 40px
        "h2-mobile": "2.25rem", //36px
        h3: "2rem", //32px
        "h3-mobile": "1.75rem", //28px
        h4: "1.5rem", //24px
        "h4-mobile": "1.25rem", //20px
        h5: "1.25rem", //20px
        "h5-mobile": "1rem", //16px
        h6: "1rem", //16px
        "body-large": "1.5rem", //24px
        "body-medium": "1.25rem", //20px
        "body-small": "1rem", //16px
        "body-mini": "0.75rem", //12px
        overline: "1rem", //16px
        button: "1.3rem", //20px
        caption: "0.6rem", //10px
        "alert-message": "0.6rem", //10px
        "logo-title": "1.3rem", //20px
      },
      colors: {
        white: "#FFFFFF",
        black: "#141414",
        error: "#FF6347",
        success: "#29E682",
        positive: "#29E682",
        danger: "#ff6347",
      },
    },
  },
  plugins: [],
};
