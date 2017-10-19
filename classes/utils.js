const { Message, MessageEmbed } = require('discord.js');

class Utils {
    constructor() {

        // const utils = this;

        // Message.prototype.EmbedEdit = async function (title, description) {
        //     const embed = new MessageEmbed()
        //         .setColor(utils.embedColor)
        //         .setTitle(title)
        //         .setDescription(description);
    
        //     await this.edit(this.content, {embed});
        // };
    }

    get embedColor() {
        return 'RANDOM';
    }
}

module.exports = Utils;