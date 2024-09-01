// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust paths as needed
  theme: {
    extend: {
      animation: {
        slideInOut: 'slideInOut 5s linear infinite',
      },
      keyframes: {
        slideInOut: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '30%': { transform: 'translateX(0)', opacity: '1' },
          '70%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
      },
      colors: {
        gradientStart: '#ff6f61',
        gradientMiddle: '#ffb74d',
        gradientEnd: '#ff8a65',
      },
    },
  },
  plugins: [],
};
