const Koa = require('koa');
const Router = require('@koa/router');

const session = require('koa-generic-session');
const bodyParser = require('koa-body') 
const jwt = require('koa-jwt');
const cors = require('@koa/cors');

const KeyGrip = require('keygrip')
const config = require('config');
const cookie = config.get('cookies')
const secret = config.get('secret')
const store = require('./redis')
const api = require('./src/api');
const middleware = require('./src/middleware');

const app = new Koa();
const router = new Router();

// Set signed cookie keys.
app.keys = new KeyGrip(secret, 'sha256');

const dotenv = require('dotenv')
dotenv.config()

app.use(session({
  store,
  cookie
}));

// // Custom 401 handling if you don't want to expose koa-jwt errors to users
// app.use(function(ctx, next){
//     return next().catch((err) => {
//     if (401 == err.status) {
//         ctx.status = 401;
//         ctx.body = 'Protected resource, use Authorization header to get access\n';
//     } else {
//         throw err;
//     }
//     });
// });
  
// // Unprotected middleware
// app.use(function(ctx, next){
//     if (ctx.url.match(/^\/public/)) {
//       ctx.body = 'unprotected\n';
//     } else {
//       return next();
//     }
// });

// app.use(cors({
//   origin: "http://192.168.31.57:3000",
//   origin: "*",
//   credentials: true
// }));
app.use(bodyParser({ multipart: true })) 
if(process.env.NODE_ENV === "production" && process.env.CLIENT) {
  app.use(cors({ 
    origin: process.env.CLIENT,
    credentials : true 
  }));
} else {
  app.use(cors({ credentials : true }));
}
router.use(middleware)
router.use('/api', api.routes());

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(process.env.PORT || 8080, () => {
  console.log('server is listening to port 8080');
});