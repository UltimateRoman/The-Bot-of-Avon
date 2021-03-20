

module.exports = {
	name: 'info',
	aliases: [],
	description: 'Find information about a particular work of Shakespeare',
	usage: '!info [Name of the work]',
	execute: async(message, args, client)=>{
        if(args.length < 1){
			message.channel.send('Error: the work has not been specified'); return;
        }
    }
}