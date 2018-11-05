const keys = ['This is a session key']
const Config = {
    key: 'koa:sess', 
    maxAge: 1000*60*60*24,
    autoCommit: true, 
    overwrite: true, 
    httpOnly: true, 
    signed: true,
    rolling: true, 
    renew: false,
};

module.exports = {
    keys,
    Config
}