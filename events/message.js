const { Message }    = require('discord.js'); //eslint-disable-line no-unused-vars
const ExtendedClient = require('../extendedClient'); //eslint-disable-line no-unused-vars

/**
 * @param {ExtendedClient} client
 * @param {Message} message
 */
exports.run = async (client, message) => {
    if (message.author.bot || !message.content.startsWith('arg!')) {
        return;
    }

    const [commandName, ...argsString] = message.content.substring(4).split(' ');

    const command = client.commands.get(commandName);

    if (!command) {
        return;
    }

    const args = parseArgs(argsString.join(' '));

    try {
        await command.run(client, message, args);
    } catch(err) {
        client.logger.error('CommandInvoke', err);
    }    
};

const parseArgs = (text) => {

    const argRegex = /(?:(\w+):(?:"(.+)"|(\w+)))+/g;

    let match;
    let returnObject = {};

    while (match = argRegex.exec(text)) { //eslint-disable-line no-cond-assign
        returnObject[match[1]] = match[2] || match[3];
    }

    return returnObject;    
};