module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          blue: {
            midnight : '#1c1938',
          },
          black: {
            lighter: '#0a0c1b',
          },
        },
        backgroundImage : (theme) => ({
          'desktop-svg' : "url('images/bg-desktop.svg')",
          'mobile-svg' : "url('images/bg-mobile.svg')",
        }),
      },
    },
    variants: {},
    plugins: [],
  }