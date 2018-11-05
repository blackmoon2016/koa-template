const Router = require('koa-router')
const RouterMap = require('../controller')

const router = new Router();

Object.keys(RouterMap).forEach( key =>{
    let [method, path] = key.split(' ')
    router[method.toLowerCase()](path,RouterMap[key])
})

module.exports = router