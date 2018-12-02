/** Import CommonJS Module */
const env = process.env;

/** Export Application Configuration */
module.exports = {
    host: env.NODEJS_HOST || "127.0.0.1",
    port: env.NODEJS_PORT || "8080"
};