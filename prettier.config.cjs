module.exports = {
  singleQuote: true,
  semi: false,
  singleAttributePerLine: true,
  arrowParens: 'avoid',
  tailwindConfig: './tailwind.config.js',
  plugins: [require('prettier-plugin-tailwindcss')],
}
