const proxy = require('http-proxy-middleware')

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("node-sass"),
      },
    }
  ],
  developMiddleware: app => {
    app.use(
      proxy(['/mock/16430'], {
        target: 'https://mock.yonyoucloud.com/',
        changeOrigin: true,
      })
    )
  }
}