import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // This maps the Tailwind class 'font-roboto' to your CSS variable
                roboto: ["var(--font-roboto)", "sans-serif"],
                // This maps 'font-sonic' to your local font variable
                sonic: ["var(--font-sonic)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;