const Router = require('@koa/router');
const { generateToken } = require('../../utils/token')
const api = new Router();
const config = require('config');
const cookie = config.get('cookies')
const { LoginHandler } = require('./controller')
// const { LoginHandler } = require('./controller')

const middleware = function(next, {keys}){
    if(!next && typeof next !== 'function') {
        console.error('koa next, only function')
        return
    }
    const filterKeys = (obj, keys)=>{
        const keylist = keys && Array.isArray(keys) ? keys :  [...keys]
        return keylist.reduce((ac, curKey)=>{ 
            if(obj[curKey]) {
                ac[curKey] = obj[curKey]
            }
            return ac 
        }, {})
    }
    // console.log(ctx.request.method)
    const { method } = this.request
    switch(true) {
        case method === 'GET':
            const { query } = this.request
            this.request.query = filterKeys(query, keys)
            break;
        case method === 'POST':
        case method === 'PUT':
        case method === 'DELETE':
        case method === 'PATCH':
            const { body } = this.request
            this.request.body = filterKeys(body, keys)
            break;
        default:
    }

    // next()
}

api.get('/', 
    (ctx, next)=>{ middleware.call(ctx, next, {keys:['id']}); }, 
    (ctx, next) => {
    const { query } = ctx.request
    console.log(query)
    ctx.session.count++
    ctx.body = 'GET ' + ctx.request.path + JSON.stringify(ctx.query);
    console.log(ctx.session.count)
});

// api.get('/', (ctx, next)=>{
//     middleware(ctx, next, ['id'])
// }, (ctx, next) => {
//     const { query } = ctx.request
//     console.log(query)
//     ctx.session.count++
//     ctx.body = 'GET ' + ctx.request.path + JSON.stringify(ctx.query);
//     console.log(ctx.session.count)
// });

api.post('/login',
    LoginHandler
);

// api.post('/login', async (ctx, next) => {
//     const { body } = ctx.request
//     // console.log('old sessionId ==', ctx.sessionId)

//     try {
//         const payload = body
//         const newSession = await ctx.regenerateSession();
//         payload.sessionId = ctx.sessionId
//         // console.log('new sessionId ==', ctx.sessionId)
//         const newToken = await generateToken(payload)
//         ctx.cookies.set('access_token', newToken, cookie);
//         // console.log(ctx.cookies)
//     } catch (err) {
//         console.error('jwt error', err)
//     }
//     ctx.body = 'POST ' + ctx.request.path + JSON.stringify(ctx.request.body);
// });

api.post('/logout', async (ctx, next) => {
    // ctx.body.id
    // console.log(ctx)
    const { body } = ctx.request
    ctx.session = null
    ctx.cookies.set('access_token')
    ctx.cookies.set('access_token.sig')
    
    ctx.body = 'POST ' + ctx.request.path + JSON.stringify(ctx.request.body);
});

module.exports = api;