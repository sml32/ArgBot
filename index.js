const ExtendedClient = require('./extendedClient');
const client         = new ExtendedClient();

client.login(client.config.token);

process.on('unhandledRejection', err => client.logger.error('Unhandled Rejection', err));