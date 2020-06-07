const Router = require('@koa/router');

const api = new Router();
const auth = require('./auth');
const system = require('./system');
const item = require('./item');

api.use('/auth', auth.routes(), auth.allowedMethods());
api.use('/system', system.routes(), system.allowedMethods());
api.use('/item', item.routes(), item.allowedMethods());
// api.use('/auth', auth.routes());
// api.use('/system', system.routes());
// api.use('/item', item.routes());


module.exports = api;