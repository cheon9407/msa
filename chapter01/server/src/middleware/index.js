const { generateToken, verifyToken } = require('../utils/token')
const cookies = require('config').get('cookies')
// Koa.js based middleware
const blockApiList = Object.create(null)

blockApiList['/api/item'] = true

module.exports = async function(ctx, next) {
    
    const accessToken = ctx.cookies.get('access_token', cookies);

    console.log('accessToken')
    console.log(accessToken)
    if(!accessToken && blockApiList[ctx.request.path]) {
        console.log("blocked", ctx.request.path)
        ctx.status = 403;
        return;
    }

    try {
        const decoded = await verifyToken(accessToken)
        const { iat, exp, iss, ...user } = decoded;
        console.log('have token')
        // console.log(user)
        /* Reassign JWT if expiration is approaching */
        if (exp - Date.now() / 1000 < maxAge) {
            const newToken = await generateToken(user);
            ctx.cookies.set('access_token', newToken, cookies);
        }
        
        ctx.request.user = user;

    } catch (err) {
        ctx.request.user = null;
    }
    
    if(ctx.request.user && (ctx.request.path) === '/api/auth/login') {
        ctx.status = 404;
        ctx.body = "not found"
        return;
    }

    return next();

}