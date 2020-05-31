const redisStore = require('koa-redis');
const config = require('config');
const redisConfig = config.get('redis');

/* TypeError: Cannot add property password, object is not extensible
    at new RedisStore (/home/node/app/node_modules/koa-redis/lib/index.js:54:20)
    at RedisStore (/home/node/app/node_modules/koa-redis/lib/index.js:48:12)
    at Object.<anonymous> (/home/node/app/redis.js:5:15) */
const store =  redisStore(Object.assign({}, redisConfig));

/* 
const { client } = store
client.on('connect', (e)=>{
    console.log('connect')
})

client.on('ready', (e)=>{
    console.log('ready')
    console.log(info)
})

client.on('error', (e)=>{
    console.log(e)
}) 
*/

module.exports = store