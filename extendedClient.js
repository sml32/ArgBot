const { Client, Collection } = require('discord.js');                 //eslint-disable-line no-unused-vars
const CommandLoader          = require('./classes/commandLoader.js');
const tvde1logger            = require('tvde1logger');
const EventLoader            = require('./classes/eventLoader.js');

class ExtendedClient extends Client {
    constructor() {
        super();

        this._config        = readConfig();

        this._logger        = new tvde1logger('ArgBot', !process.env.DONTLOGTIME);
        const eventLoader   = new EventLoader(this);
        this._commandLoader = new CommandLoader(this.logger);

        this._commandLoader.load();
        eventLoader.load();
    }

    /**
     * @returns {Logger}
     */
    get logger() {
        return this._logger;
    }

    /**
     * @returns {*}
     */
    get config() {
        return this._config;
    }

    /**
     * @returns {CommandLoader}
     */
    get commands() {
        return this._commandLoader;
    }
}

module.exports = ExtendedClient;

const readConfig = () => {
    return process.env.CONFIG_ARGBOT ? JSON.parse(process.env.CONFIG_ARGBOT) : require('./config.json');
};