exports.run = (client, message) => {
    message.channel.send(`I'm ArgBot. I'm made to test a new arg system.
It works as follows, when entering a command with args, you input them like this:
\`\`\`
key:value otherKey:"longer string with quotes"
\`\`\`
still w.i.p. btw
Some commands are:
\`\`\`
arg!ping, arg!args
\`\`\`

Bot is made by @Tvde1#0001
`);
};

exports.help = {
    name: 'about',
    description: 'Provides information about the bot.',
    usage: 'about'
};