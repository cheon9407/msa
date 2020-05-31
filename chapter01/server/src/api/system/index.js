const os = require('os');
const Router = require('@koa/router');
const api = new Router();

api.get('/hostname', 
    (ctx, next) => {
    ctx.body = 'GET ' + ctx.request.path + os.hostname;
});

api.get('/ip', 
    (ctx, next) => {
    ctx.body = 'GET ' + ctx.request.path + JSON.stringify(os.networkInterfaces());
});

module.exports = api;