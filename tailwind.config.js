module.exports = {
  experimental: {
    darkModeVariant: true
  },
  dark: "class",
  theme: {},
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "content/**/*.md",
      "content/**/*.yml",
      "plugins/**/*.js",
      "nuxt.config.js"
    ]
  }
};
