/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                circeb: ["Circe-ExtraBold"],
                circe: ["Circe-Regular"],
            },
        },
    },
    plugins: [],
};
