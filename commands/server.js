module.exports = {
	name: 'server',
	description: 'Provide information about the server.',
	execute(message, args) {
		message.channel.send(`This server's name is: United Socialist States of ${message.guild.name}\nTotal Vanguard members: ${message.guild.memberCount}`);
	},
};
