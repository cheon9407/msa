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
            ctx.status = 400;
            ctx.body = { status : 'fail' };
            return;
        }

        const newSession = await ctx.regenerateSession();
        const { sessionId } = ctx
        console.log('new sessionId ==', ctx.sessionId)
        const newToken = await generateToken({ id, sessionId })
        ctx.cookies.set('access_token', newToken);
        // ctx.cookies.set('access_token', newToken, cookie);
        console.log(cookie)
        console.log(newToken)
    } catch (err) {
        console.error('jwt error', err)
        ctx.status = 400;
        ctx.body = { status : 'fail' };
        return;
    }
    ctx.body = { status : 'ok' };
    console.log(ctx.cookies.get('access_token'))
}

module.exports = {
    LoginHandler
}