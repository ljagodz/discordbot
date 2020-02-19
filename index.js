const config = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.long(config.token);

// listen for messages:
client.on('message', message => {
	if(message.content === '!ping') {
		message.channel.send('Pong.');
	}
});
