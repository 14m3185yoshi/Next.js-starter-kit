module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  }
}

  // TODO: 設定する(「postcss-import」、「tailwindcss/nesting」)
  // postcss-import: {},
  // tailwindcss/nesting: {},
