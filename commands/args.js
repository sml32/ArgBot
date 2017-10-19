exports.run = (client, message, args) => {
    const longest = Object.getOwnPropertyNames(args).reduce((long, str) => Math.max(long, str.length), 0);
    
    const text = Object.getOwnPropertyNames(args).map(name => `${name}${' '.repeat(longest - name.length)}: ${args[name]}`).join('\n');
    message.channel.send(`Showing the current args:\n\n${text}`, { code: true });
};

exports.help = {
    name: 'args',
    description: 'Shows the parsed args.',
    usage: 'args (...any)'
};