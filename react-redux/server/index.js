const express = require('express')
const compression = require('compression')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('../webpack/config')
const app = express()
const host = config.settings.host || '0.0.0.0'
const port = config.settings.port || 8000
const env = process.env.NODE_ENV || 'development'
const isDevMode = env.toLowerCase() !== 'production'
                        
app.use(compression())

app.set('views', `${__dirname}`)
app.set('view engine', 'pug')
/* Case DEV mode */
if (isDevMode) {
    const compiler = webpack(config)
    app.use(webpackHotMiddleware(compiler))
    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        stats: {
            colors: true,
            timings: true
        }           
    }))
} else {
    /* Case PRODUCTION mode */
    app.use(express.static(config.settings.distPath))
}

const initialState = {
    dashboard: {
        title: 'My Dashboard',
        layoutColumn: 3,
        widgets: [
            {
                title: 'widget 1'
            },
            {
                title: 'widget 2'
            },
            {
                title: 'widget 3'
            }
        ]
    }
}

app.get('*', (req, res) => {
    res.render('index', { initialState })
})


app.listen(port, config.settings.host, error => {
    if (error) {
        console.info("⛔ ⛔ ⛔  *** ERROR *** ⛔ ⛔ ⛔")
        console.error(error)
    } else {
        console.info("✅ ✅ ✅  *** %s mode's started *** ✅ ✅ ✅", env.toUpperCase())
        console.info("✅ ✅ ✅  *** Listening at http://%s:%s *** ✅ ✅ ✅", host, port)
    }
})
