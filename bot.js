const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const{ prefix, token } = require('./config.json');


console.log('Starting The Bot of Avon...');
client.login(token);

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


client.once('ready', () => {
	console.log('The Bot of Avon is online!');
});


client.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot){ return; }

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if(!client.commands.has(command)){ console.log('command not found'); return; }

	try{
		client.commands.get(command).execute(message, args, client);
	}catch(error){
		console.error(error);
		message.channel.send('An unknown error occurred.');
	}
});