const redis = require("redis");

const HOST = process.env.REDIS_HOST || '127.0.0.1';
const PORT = process.env.REDIS_PORT || 6379;

const client = redis.createClient({ host: '127.0.0.1', port: 6379 });
console.log(`redis client connected: ${HOST}:${PORT}`);

client.on("error", function (err) {
    console.log("Error " + err);
});

client.hgetall('histo', (err, k) => console.log(k));

client.quit();