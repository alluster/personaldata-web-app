module.exports = {
  env: {
    SHOPIFY_API_KEY:'f9ec1be32e21021268d3666ffcbe12f7',
    SHOPIFY_PASSWORD:'c6f2f2120fbb1371fb6e989feb6a8cfb',
    SHOPIFY_SHARED_SECRET:'3f47083b4ed4fa995c22af1b22d04d92',
    SHOPIFY_STOREFRONT_ACCESS_KEY:'511cd147a817e9508e57354ce3157aa2',
    SHOPIFY_DOMAIN:'kuja-testi-1.myshopify.com',
    HOST: 'localhost:'
    },
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
}
