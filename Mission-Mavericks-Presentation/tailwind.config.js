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
        // Official Palette
        problem: "#FF5A3C",     // Problem (#FF5A3C)
        mission: "#2563EB",     // Mission (#2563EB)
        claimshield: "#00D09C", // ClaimShield+ (#00D09C)
        fasttrack: "#32F27A",   // Fast-Track (#32F27A)
        aifuture: "#8B5CF6",    // AI / Future (#8B5CF6)
        neutral: "#94A3B8",     // Neutral (#94A3B8)
        brand: {
          navy: "#06152f",
          blue: "#2563EB",      // Mission
          cyan: "#00D09C",      // ClaimShield+
          teal: "#00D09C",      // ClaimShield+
          green: "#32F27A",     // Fast-Track
          lime: "#32F27A",      // Fast-Track
          red: "#FF5A3C",       // Problem
          orange: "#FF5A3C",    // Problem
          purple: "#8B5CF6",    // AI / Future
          pink: "#8B5CF6",      // AI / Future
          muted: "#94A3B8",     // Neutral
        },
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'Segoe', '-apple-system', 'BlinkMacSystemFont', 'Roboto', 'Arial', 'sans-serif'],
        display: ['"Segoe UI"', 'Segoe', '-apple-system', 'BlinkMacSystemFont', 'Roboto', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'glow-problem': '0 0 35px -5px rgba(255, 90, 60, 0.45)',
        'glow-mission': '0 0 35px -5px rgba(37, 99, 235, 0.45)',
        'glow-claimshield': '0 0 35px -5px rgba(0, 208, 156, 0.45)',
        'glow-fasttrack': '0 0 35px -5px rgba(50, 242, 122, 0.45)',
        'glow-aifuture': '0 0 35px -5px rgba(139, 92, 246, 0.45)',
        'glow-green': '0 0 35px -5px rgba(50, 242, 122, 0.45)',
        'glow-cyan': '0 0 35px -5px rgba(0, 208, 156, 0.45)',
        'glow-blue': '0 0 35px -5px rgba(37, 99, 235, 0.45)',
        'glow-purple': '0 0 35px -5px rgba(139, 92, 246, 0.45)',
        'glow-orange': '0 0 35px -5px rgba(255, 90, 60, 0.45)',
        'glow-red': '0 0 35px -5px rgba(255, 90, 60, 0.45)',
        'glow-pink': '0 0 35px -5px rgba(139, 92, 246, 0.45)',
        'card-glass': '0 20px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'aurora-mesh': 'radial-gradient(at 0% 0%, rgba(37, 99, 235, 0.25) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(139, 92, 246, 0.2) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(0, 208, 156, 0.18) 0px, transparent 50%)',
        'aurora-hero': 'radial-gradient(circle at 50% 40%, rgba(0, 208, 156, 0.15), transparent 60%), radial-gradient(circle at 80% 20%, rgba(50, 242, 122, 0.15), transparent 50%)',
        'gradient-brand': 'linear-gradient(135deg, #00D09C 0%, #32F27A 50%, #2563EB 100%)',
        'gradient-text': 'linear-gradient(100deg, #ffffff 0%, #00D09C 50%, #32F27A 100%)',
        'gradient-problem': 'linear-gradient(100deg, #ffffff 0%, #fed7aa 40%, #FF5A3C 100%)',
        'gradient-mission': 'linear-gradient(100deg, #ffffff 0%, #bfdbfe 40%, #2563EB 100%)',
        'gradient-claimshield': 'linear-gradient(100deg, #ffffff 0%, #99f6e4 40%, #00D09C 100%)',
        'gradient-fasttrack': 'linear-gradient(100deg, #ffffff 0%, #bbf7d0 40%, #32F27A 100%)',
        'gradient-aifuture': 'linear-gradient(100deg, #ffffff 0%, #ddd6fe 40%, #8B5CF6 100%)',
        'gradient-warm': 'linear-gradient(100deg, #ffffff 0%, #fed7aa 50%, #FF5A3C 100%)',
        'gradient-purple': 'linear-gradient(100deg, #ffffff 0%, #ddd6fe 50%, #8B5CF6 100%)',
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
