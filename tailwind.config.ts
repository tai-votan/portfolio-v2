import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./features/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                atlantis: {
                    "50": "#f7fbea",
                    "100": "#ecf7d0",
                    "200": "#daefa7",
                    "300": "#bfe274",
                    "400": "#9acd32",
                    "500": "#87b82a",
                    "600": "#68921e",
                    "700": "#4f701b",
                    "800": "#41591b",
                    "900": "#374c1b",
                    "950": "#1c290a",
                },
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
