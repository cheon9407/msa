const { generateToken, verifyToken } = require('../../utils/token')
const { Users } = require('../../db/models')
const cookie = require('config').get('cookies')

const LoginHandler = async function(ctx, next){
    const { body } = ctx.request
    // console.log('old sessionId ==', ctx.sessionId)

    try {
        const { id, password }  = body
        const user = await Users.findOne({ where: { id, password } });
        
        if(!user) {
            console.error('not user')
            ctx.body = 'POST ' + ctx.request.path + JSON.stringify(ctx.request.body);
            return;
        }

        const newSession = await ctx.regenerateSession();
        const { sessionId } = ctx
        // console.log('new sessionId ==', ctx.sessionId)
        const newToken = await generateToken({ id, sessionId })
        ctx.cookies.set('access_token', newToken, cookie);
        // console.log(ctx.cookies)
    } catch (err) {
        console.error('jwt error', err)
    }
    ctx.body = 'POST ' + ctx.request.path + JSON.stringify(ctx.request.body);
}

module.exports = {
    LoginHandler
}