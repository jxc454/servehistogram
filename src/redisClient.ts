import redis from 'redis';

const HOST = process.env.REDIS_HOST || '127.0.0.1';
const PORT = process.env.REDIS_PORT || 6379;
const client = redis.createClient({ host: '127.0.0.1', port: 6379 });

const { promisify } = require('util');
const hgetallAsync = promisify(client.hgetall).bind(client);

export default async function getHistogram() {
    return await hgetallAsync('histogram');
}

console.log(`redis client connected: ${HOST}:${PORT}`);

client.on("error", function (err) {
    console.log("Error " + err);
});
