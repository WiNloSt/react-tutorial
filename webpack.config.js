const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === 'development';

const path         = require('path');
const getConfig    = require('hjs-webpack');

const config = getConfig({
  isDev: isDev,
  in: path.join(__dirname, 'src/app.js'),
  out: path.join(__dirname, 'dist'),
  clearBoforeBuild: true
})

module.exports = config;
