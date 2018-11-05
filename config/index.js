const path = require('path')
const sessionConfig = require('./session.config')
module.exports = {
    PORT: 4200,
    IP: '0.0.0.0',
    webRoot: path.resolve(__dirname , './static'),
    sessionConfig
}