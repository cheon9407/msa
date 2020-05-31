const Router = require('@koa/router');
const api = new Router();
const { Items } = require('../../db/models')

api.get('/', async(ctx, next) => {
    const items = await Items.findAll()
    // console.log(items.get({ plain: true }))
    ctx.body = items;
});

api.get('/:id', async(ctx, next) => {
    const { id } = ctx.params
    const item = await Items.findOne({ where : { id }})
    ctx.body = item ? item : {};
});

api.post('/', async(ctx, next) => {
    const { body } = ctx.request
    const { name, cost } = body 
    const item = await Items.create({ name, cost })
    ctx.body = item;
});

api.delete('/:id', async(ctx, next) => {
    const { id } = ctx.params
    const item = await Items.findOne({ where : { id }})
    item && await item.destroy();
    ctx.body = 'removed';
});

module.exports = api;