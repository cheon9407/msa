const { generateToken, verifyToken } = require('../utils/token')
const cookies = require('config').get('cookies')
// Koa.js based middleware
module.exports = async (ctx, next) => {
    
    const accessToken = ctx.cookies.get('access_token');
    if (!accessToken) {
        ctx.request.user = null;
        return next();
    }

    try {
        const decoded = await verifyToken(accessToken)
        const { iat, exp, iss, ...user } = decoded;
        console.log(user)
        /* Reassign JWT if expiration is approaching */
        if (exp - Date.now() / 1000 < maxAge) {
            const newToken = await generateToken(user);
            ctx.cookies.set('access_token', newToken, cookies);
        }
        
        ctx.request.user = user;

    } catch (err) {
        ctx.request.user = null;
    }

    const blockApiList = ['/item']
    
    if(ctx.request.user && (ctx.request.path) === '/api/auth/login') {
        ctx.status = 404;
        ctx.body = "not found"
        return;
    }
    if(!ctx.request.user && blockApiList.includes(ctx.request.path)) {
        ctx.status = 404;
        ctx.body = "not found"
        return;
    }

    return next();

}