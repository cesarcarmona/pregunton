/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'Montserrat', 'sans-serif'],
            },
            colors: {
                'app-gray': '#f0f4f8'
            }
        },
    },
    plugins: [],
}

