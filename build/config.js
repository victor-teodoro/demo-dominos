const path = require('path')

let config = {
  root: path.join(__dirname, '../'),
  src: {
    root: 'src',
    assets: 'assets',
    indexHTML: 'index.html',
    indexJS: 'src/index.js',
    manifest: 'manifest.xml'
  },
  dist: {
    root: 'dist',
    name: 'my-app'
  }
}

module.exports = config
