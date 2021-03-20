const play_data = require('../pdata.json');

module.exports = {
	name: 'info',
	aliases: [],
	description: 'Find information about a particular play or character',
	usage: '!info [Name of the play/character]',
	execute: async(message, args, client)=>{
        if(args.length < 1){
			message.channel.send('Error: play/character has not been specified'); return;
        }
    }
}