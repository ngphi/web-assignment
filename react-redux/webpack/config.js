const configs = {
  dev: require('./config.dev'),
  prod: require('./config.prod')
}

const TARGET = process.env.npm_lifecycle_event || ''

process.env.BABEL_ENV = TARGET

console.info("🌎 🌎 🌎  *** Running %s command *** 🌎 🌎 🌎", TARGET.toUpperCase())

switch (TARGET.toLowerCase()) {
  case 'stats':
  case 'start':
  case 'prod':
  case 'build':
    process.env.NODE_ENV = 'production'
    module.exports = configs.prod
    break
  case 'dev':
  default:
    console.info("🌎 🌎 🌎  *** DEVELOPMENT mode starts up *** 🌎 🌎 🌎")
    process.env.NODE_ENV = 'development';
    module.exports = configs.dev
    break
}
