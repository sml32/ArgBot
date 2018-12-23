const ExtendedClient = require('./extendedClient');
const client         = new ExtendedClient();

client.login(process.env.TOKEN);

process.on('unhandledRejection', err => client.logger.error('Unhandled Rejection', err));
