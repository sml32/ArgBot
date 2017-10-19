require('colors');
const moment = require('moment');

class Logger {
    
    /**
     * Logs in the console.
     * @param {string} title The title of the log message. 
     * @param {string} description The description of the log message.
     */
    log(title, description) {
        const time = moment().format('YYYY-MM-DD HH:mm:ss');
        console.log(`${time} ||  ${'LOG'.green}  || ${title}${description ? ` | ${description}` : ''}`); //eslint-disable-line no-console
    }

    /**
     * Logs an error in the console.
     * @param {string} title The title of the error message.
     * @param {string} description The description of the error message.
     */
    error(title, description) {
        const time = moment().format('YYYY-MM-DD HH:mm:ss');
        console.error(`${time} || ${'ERROR'.red} || ${title}${description ? ` | ${description}` : ''}`); //eslint-disable-line no-console
    }
}

module.exports = Logger;