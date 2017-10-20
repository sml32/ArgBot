const Logger                 = require('./classes/logger');
const EventLoader            = require('./classes/eventLoader.js');
const CommandLoader          = require('./classes/commandLoader.js');
const { Client, Collection } = require('discord.js');                 //eslint-disable-line no-unused-vars

class ExtendedClient extends Client {
    constructor() {
        super();

        this._config        = readConfig();

        this._logger        = new Logger(this.config.channels);
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
    return process.env.ARGBOT_CONFIG ? JSON.parse(process.env.CONFIG) : require('./config.json');
};