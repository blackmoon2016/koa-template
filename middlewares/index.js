const root = require('koa-static')
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')
const session = require('koa-session')
// Conifg
const Config = require('../config')

module.exports = (app) => {
    //koa-logger
    app.use(logger())
    //koa-session
    app.keys = Config.sessionConfig.keys
    app.use(session(Config.sessionConfig.Config,app))
    //koa-static
    app.use(root(Config.webRoot))
    //koa-bodyparser
    app.use(bodyParser())
}
