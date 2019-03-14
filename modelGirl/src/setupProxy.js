const proxy = require("http-proxy-middleware");
 
module.exports = function(app) {
  app.use(
    proxy("/daxun", {
      target: "http://39.98.32.245:3000",
      changeOrigin: true,
      pathRewrite: {
        '^/daxun': ''
      }
    })
  );
  app.use(
    proxy("/user", {
      target: "http://www.yman.pro/user",
      changeOrigin: true,
      pathRewrite: {
        '^/user': ''
      }
    })
  );
};


