/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['NHaasGroteskTXPro', 'system-ui', 'sans-serif'],
        'haas': ['NHaasGroteskTXPro', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        'regular': '400',
        'medium': '500',
        'bold': '700',
      },
      maxWidth: {
        'container': '1678px', // 1920px - (121px * 2) = 1678px
        'mobile': '100%',
        'tablet': '768px',
        'desktop': '1200px',
        '4k': '1678px',
      },
      screens: {
        'xs': '375px',   // Mobile small
        'sm': '640px',   // Mobile large
        'md': '768px',   // Tablet
        'lg': '1024px',  // Desktop small
        'xl': '1280px',  // Desktop large
        '2xl': '1536px', // Desktop extra large
        '4k': '1920px',  // 4K displays
      },
      spacing: {
        'container-x': '121px', // Side margins for 1920px screens
      },
    },
  },
  plugins: [],
}