const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://findwork.dev',  // Target API URL
      changeOrigin: true,
      secure: false,  // Set this to 'true' if the API uses HTTPS (recommended)
      pathRewrite: {
        '^/api': '',  // Rewrite `/api` to match the actual API endpoint structure
      },
    })
  );
};
