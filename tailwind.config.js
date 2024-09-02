// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust paths as needed
  theme: {
    extend: {
      animation: {
        slideInOut: 'slideInOut 10s linear infinite', // Increased duration for slower animation
      },
      keyframes: {
        slideInOut: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '10%': { transform: 'translateX(0)', opacity: '1' }, // Slide in and become visible
          '60%': { transform: 'translateX(0)', opacity: '1' }, // Stay visible for 5 seconds
          '100%': { transform: 'translateX(100%)', opacity: '0' }, // Slide out
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
