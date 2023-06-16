/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'fuaprimary': {
        100: '#CAE7FC',
        200: '#96CCFA',
        300: '#60A9F1',
        400: '#3987E4',
        500: '#0058D3',
        600: '#0044B5',
        700: '#003297',
        800: '#00237A',
        900: '#001965',
      },
      'fuasecondary': {
        100: '#D8FCE8',
        200: '#B3FAD9',
        300: '#8AF0CB',
        400: '#69E2C2',
        500: '#3CD0B6',
        600: '#2BB2A7',
        700: '#1E9495',
        800: '#136D78',
        900: '#0B5263',
      },
      // ...
    },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  
}
