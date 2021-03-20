module.exports = {
	name: 'help',
	aliases: [],
	description: 'displays the set of commands and their usage',
	usage: '!help [command]',
	execute(message, args, client){

		const commands_data = [];
		const { commands } = message.client;

		if(args.length > 0){
			if(!commands.has(args[0])){ message.channel.send('Sorry, but that command does not exist.'); return; }
			command = commands.get(args[0]);
			commands_data.push(`**Name:** ${command.name}\n**Description:** ${command.description}\n**Usage:** ${command.usage}`);
			message.author.send(commands_data.join(' '), { split: true });
		}
		
	}
    
}
