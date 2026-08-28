/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#020713",
        surface: {
          DEFAULT: "#06152f",
          card: "rgba(255, 255, 255, 0.04)",
          cardHover: "rgba(255, 255, 255, 0.08)",
          glass: "rgba(6, 21, 47, 0.75)",
        },
        brand: {
          navy: "#06152f",
          blue: "#1767ff",
          cyan: "#00d9ff",
          green: "#20df89",
          lime: "#b9ff62",
          red: "#ff4058",
          orange: "#ff8a3d",
          purple: "#8b5cf6",
          pink: "#ec4899",
          muted: "#aab7ca",
        },
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'Segoe', '-apple-system', 'BlinkMacSystemFont', 'Roboto', 'Arial', 'sans-serif'],
        display: ['"Segoe UI"', 'Segoe', '-apple-system', 'BlinkMacSystemFont', 'Roboto', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'glow-green': '0 0 35px -5px rgba(32, 223, 137, 0.45)',
        'glow-cyan': '0 0 35px -5px rgba(0, 217, 255, 0.45)',
        'glow-blue': '0 0 35px -5px rgba(23, 103, 255, 0.45)',
        'glow-purple': '0 0 35px -5px rgba(139, 92, 246, 0.45)',
        'glow-orange': '0 0 35px -5px rgba(255, 138, 61, 0.45)',
        'glow-pink': '0 0 35px -5px rgba(236, 72, 153, 0.45)',
        'card-glass': '0 20px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'aurora-mesh': 'radial-gradient(at 0% 0%, rgba(23, 103, 255, 0.25) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(139, 92, 246, 0.2) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(32, 223, 137, 0.18) 0px, transparent 50%)',
        'aurora-hero': 'radial-gradient(circle at 50% 40%, rgba(32, 223, 137, 0.15), transparent 60%), radial-gradient(circle at 80% 20%, rgba(0, 217, 255, 0.15), transparent 50%)',
        'gradient-brand': 'linear-gradient(135deg, #20df89 0%, #00d9ff 50%, #1767ff 100%)',
        'gradient-text': 'linear-gradient(100deg, #ffffff 0%, #a3c9ff 50%, #20df89 100%)',
        'gradient-warm': 'linear-gradient(100deg, #ffffff 0%, #ffc099 50%, #ff8a3d 100%)',
        'gradient-purple': 'linear-gradient(100deg, #ffffff 0%, #c4b5fd 50%, #8b5cf6 100%)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite alternate',
        'float-slow': 'floatSlow 6s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%': { transform: 'scale(1)', filter: 'drop-shadow(0 0 15px rgba(32, 223, 137, 0.4))' },
          '100%': { transform: 'scale(1.03)', filter: 'drop-shadow(0 0 35px rgba(32, 223, 137, 0.75))' },
        },
        floatSlow: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
