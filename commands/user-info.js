module.exports = {
	name: 'user-info',
	description: 'Print information about the user issuing the command.',
	execute(message, args) {
		message.channel.send(`Your username: Comrade ${message.author.username}\nYour ID: ${message.author.id}`);
	},
};
