const Router = require('@koa/router');
const models = require('../db/models')
const api = new Router();

api.get('/', (ctx, next) => {
    ctx.body = 'GET ' + ctx.request.path;
});

api.get('/info', (ctx, next) => {
    ctx.body = 'GET ' + ctx.request.path;
});

api.get('/users', async (ctx, next) => {
    try {
        const user = await models.User.findAll();
        ctx.response.body = { "tes" : "Test"}
        console.log('11111')
    } catch (e) {
        console.log(e)
    }
});

api.get('/test', async (ctx, next) => {
    ctx.body = [1,2,3,4,5]
});


module.exports = api;