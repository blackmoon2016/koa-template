const Koa = require('koa')
const Config = require('./config')
const router = require('./routes')
const middlewares = require('./middlewares')

//set IP and PORT
const IP = process.env.IP || Config.IP || '0.0.0.0'
const PORT = process.env.PORT || Config.PORT || 4200

const app = new Koa()
// import middlewares
middlewares(app)
// koa-route
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(PORT,IP,()=>{
    console.log(`server is started at ${IP}:${PORT} ...`)
})