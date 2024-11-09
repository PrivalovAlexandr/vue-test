/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,vue}"],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "8px",
            },
        },
        extend: {
            fontSize: {
                "44/100": ["36px", "100%"],
                "36/100": ["36px", "100%"],
                "32/136": ["32px", "136%"],
                "28/128": ["28px", "128%"],
                "24/132": ["24px", "132%"],
                "20/140": ["20px", "140%"],
                "20/120": ["20px", "120%"],
                "16/128": ["16px", "128%"],
                "16/120": ["16px", "120%"],
                "12/132": ["12px", "132%"],
                "8/144": ["8px", "144%"],
            },
        },
    },
    plugins: [],
};
