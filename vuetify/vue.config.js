const { env } = require("shelljs");

module.exports = {
  devServer: {
    // set proxy address
    proxy: 'http://127.0.0.1:8000',
    disableHostCheck: true
  },
  // save static files in laravel public dir
  outputDir: '../public',
  // generated html files location during production
  indexPath: process.env.NODE_ENV === 'production' ? '../resources/views/index.blade.php' : 'index.html',
  // vuetify
  transpileDependencies: ['vuetify']
}
