const Router = require('@koa/router');

const api = new Router();
const auth = require('./auth');
const studymoa = require('./studymoa');
const system = require('./system');
const item = require('./item');

api.use('/auth', auth.routes(), auth.allowedMethods());
api.use('/studymoa', studymoa.routes(), studymoa.allowedMethods());
api.use('/system', system.routes(), system.allowedMethods());
api.use('/item', item.routes(), item.allowedMethods());

module.exports = api;