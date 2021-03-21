const play_data = require('../pdata.json');

module.exports = {
	name: 'find',
	aliases: [],
	description: 'find information about a particular line from any play',
	usage: '!find "[line]"',
	execute: async(message, args, client)=>{
        if(args.length < 1){
			message.channel.send('Error: line has not been specified'); return;
        }

        if(args.length > 1) {
            try {
                let lineInfo = null;
                const findLine = args.slice(0).join(' ').replace(/['"]+/g, '');
                play_data.forEach(line => {
                    if(line.PlayerLine == findLine) {
                        lineInfo = line;
                    }
                });
                
                if(lineInfo) {
                    await message.channel.send(`Tis a spoken line by **${lineInfo.Player}** in the play **${lineInfo.Play}** - Actscene Line **${lineInfo.ActSceneLine}**`)
                }

                else {
                    await message.channel.send("The line could not be found.");
                }
            }
            catch(e) {
                console.log("Error: ", e);
            }
            return;
        }
    }
}