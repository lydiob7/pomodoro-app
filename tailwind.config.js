/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        animation: {
            offsettozero: "offsettozero linear"
        },
        extend: {
            borderWidth: {
                1: "1px",
                6: "6px"
            },
            colors: {
                primary: "#DF1901",
                secondary: "#619277"
            }
        },
        keyframes: {
            offsettozero: {
                to: {
                    "stroke-dashoffset": 0
                }
            }
        }
    },
    plugins: []
};
