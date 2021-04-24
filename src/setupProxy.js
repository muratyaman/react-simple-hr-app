const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      // IPv4: 'http:/localhost:9090'
      // IPv6: 'http:/[::1]:9090'
      target: 'http://[::1]:9090',
      changeOrigin: true,
      secure: false,
      logLevel: 'debug',
      pathRewrite: {
        '^/api': '',
      },
    }),
  );
};
