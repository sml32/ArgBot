exports.run = async (client, message) => {
    const m = await message.channel.send('Ping?');
    m.edit(`Pong! Latency is ${message.createdTimestamp - m.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
};

exports.help = {
    name: 'ping',
    description: 'A simple ping command.',
    usage: 'ping'
};