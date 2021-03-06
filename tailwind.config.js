module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.tsx',
    './app/**/*.jsx',
    './app/**/*.js',
    './app/**/*.ts',
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
