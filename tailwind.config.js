/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "text-title": "#403F3F",
        paragraph: "#9F9F9F",
      },
    },
  },
  plugins: [require("daisyui")],
};

/*

.poppins-light {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
}



*/
