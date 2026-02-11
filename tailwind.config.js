/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: '1rem',
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
            },
        },
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#5D4037', // Dark Brown
                    light: '#8D6E63',
                    dark: '#3E2723',
                },
                secondary: {
                    DEFAULT: '#D4AF37', // Gold
                    light: '#F4C430',
                    dark: '#A67C00',
                },
                cream: {
                    DEFAULT: '#FDFBF7', // Off-white/Cream
                    dark: '#F5F5DC',
                },
                green: {
                    DEFAULT: '#2D5A27', // Forest Green
                    light: '#4E8C45',
                },
                surface: '#FFFFFF',
                text: {
                    main: '#2C2420',
                    muted: '#6B5E57',
                    light: '#FAF9F6'
                },
                border: '#E8E2D9',
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            boxShadow: {
                'soft': '0 10px 30px -5px rgba(93, 64, 55, 0.1)',
                'card': '0 20px 40px -10px rgba(93, 64, 55, 0.15)',
                'glow': '0 0 20px rgba(212, 175, 55, 0.3)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
