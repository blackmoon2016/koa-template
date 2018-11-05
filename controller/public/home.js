const fs = require('fs')
const util = require('util')
const readFileSync = util.promisify(fs.readFile)
const path = require('path')

module.exports = async (ctx, next) =>{
    let HTML = `
        <h3>Hello Koa ...</h3>
        <p>installed:</p>
    `
    let dep = await readFileSync(path.resolve(__dirname,'../../package.json')).then(res => JSON.parse(res.toString()).dependencies)
    if(Object.keys(dep).length > 0){
        HTML +="<ul>"
        Object.keys(dep).map(item=>{
            if(item === 'koa') return
            console.log(item)
            HTML +=`<li>${item}</li>`
        })
        HTML +="</ul>"
    }
   
    ctx.body = HTML
}