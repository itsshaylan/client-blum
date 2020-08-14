const path = require("path")
const withOptimizedImages = require("next-optimized-images")

module.exports = withOptimizedImages({
  assetPrefix: "https://blumnailbar.com",
  webpack(config) {
    config.resolve.alias.images = path.join(__dirname, "images")
    return config
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
})
