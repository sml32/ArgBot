const ExtendedClient = require('../extendedClient'); //eslint-disable-line no-unused-vars

/**
 * @param {ExtendedClient} client The client.
 */
exports.run = (client) => {
    client.logger.log('Event', 'Bot is ready!');

    client.user.setPresence({game:{ name:'arg!about'}});
};