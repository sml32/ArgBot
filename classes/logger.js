require('colors');
const moment = require('moment');

class Logger {
    
    /**
     * Logs in the console.
     * @param {string} title The title of the log message. 
     * @param {string} description The description of the log message.
     */
    log(title, description) {
        const logTime = !process.env.DONTLOGTIME;
        const time = moment().format('YYYY-MM-DD HH:mm:ss');
        console.log(`${!logTime ? `${time} || ` : '' } ${'LOG'.green}  || ${title}${description ? ` | ${description}` : ''}`); //eslint-disable-line no-console
    }

    /**
     * Logs an error in the console.
     * @param {string} title The title of the error message.
     * @param {string} description The description of the error message.
     */
    error(title, description) {
        const logTime = !process.env.DONTLOGTIME;
        const time = moment().format('YYYY-MM-DD HH:mm:ss');
        console.error(`${logTime ? `${time} || ` : '' }${'ERROR'.red} || ${title}${description ? ` | ${description}` : ''}`); //eslint-disable-line no-console
    }
}

module.exports = Logger;