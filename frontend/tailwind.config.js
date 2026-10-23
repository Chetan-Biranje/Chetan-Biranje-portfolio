/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-green': {
          50: '#e6fff5',
          100: '#b3ffe0',
          200: '#80ffcc',
          300: '#4dffb8',
          400: '#1affa3',
          500: '#00ff88',
          600: '#00cc6d',
          700: '#009952',
          800: '#006636',
          900: '#00331b',
        },
        'cyber-blue': {
          50: '#e6f7ff',
          100: '#b3e5ff',
          200: '#80d4ff',
          300: '#4dc3ff',
          400: '#1ab2ff',
          500: '#00a1ff',
          600: '#0081cc',
          700: '#006199',
          800: '#004066',
          900: '#002033',
        },
        'cyber-cyan': {
          50: '#e6ffff',
          100: '#b3ffff',
          200: '#80ffff',
          300: '#4dffff',
          400: '#1affff',
          500: '#00e5ff',
          600: '#00b8cc',
          700: '#008a99',
          800: '#005c66',
          900: '#002e33',
        },
        'dark': {
          50: '#e6e8ea',
          100: '#b3b9be',
          200: '#808a92',
          300: '#4d5b66',
          400: '#1a2c3a',
          500: '#0a192f',
          600: '#081426',
          700: '#060f1c',
          800: '#040a13',
          900: '#020509',
          950: '#010304',
        },
      },
      fontFamily: {
        'mono': ['"Fira Code"', '"JetBrains Mono"', 'Consolas', 'monospace'],
        'sans': ['"Inter"', '"Segoe UI"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'matrix-fall': 'matrixFall 10s linear infinite',
        'scan-line': 'scanLine 8s linear infinite',
        'flicker': 'flicker 3s infinite',
        'typing': 'typing 3.5s steps(30, end), blink-caret 0.75s step-end infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 40px #00ff88' },
          '100%': { textShadow: '0 0 20px #00e5ff, 0 0 40px #00e5ff, 0 0 80px #00e5ff' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        matrixFall: {
          '0%': { transform: 'translateY(-100%)', opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        scanLine: {
          '0%': { top: '-10%' },
          '100%': { top: '110%' },
        },
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '1' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.33' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        slideUp: {
          'from': { transform: 'translateY(30px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          'from': { transform: 'translateY(-10px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: '#00ff88' },
          '50%': { borderColor: '#00e5ff' },
        },
      },
      boxShadow: {
        'cyber': '0 0 15px rgba(0, 255, 136, 0.3), 0 0 30px rgba(0, 255, 136, 0.1)',
        'cyber-lg': '0 0 30px rgba(0, 255, 136, 0.4), 0 0 60px rgba(0, 255, 136, 0.2)',
        'cyber-blue': '0 0 15px rgba(0, 229, 255, 0.3), 0 0 30px rgba(0, 229, 255, 0.1)',
        'cyber-blue-lg': '0 0 30px rgba(0, 229, 255, 0.4), 0 0 60px rgba(0, 229, 255, 0.2)',
        'neon': '0 0 5px theme("colors.cyber-green.500"), 0 0 20px theme("colors.cyber-green.500")',
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, #0a192f 0%, #020c1b 50%, #0a192f 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(0,255,136,0.05) 0%, rgba(0,229,255,0.05) 100%)',
        'hero-gradient': 'radial-gradient(ellipse at center, rgba(0,255,136,0.08) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
