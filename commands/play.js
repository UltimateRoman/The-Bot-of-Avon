const play_data = require('../pdata.json');

module.exports = {
	name: 'play',
	aliases: [],
	description: 'Start playing any particular Play',
	usage: '!play [Name of the Play]',
	execute: async(message, args, client)=>{
        if(args.length < 1){
			message.channel.send('Error: play name not specified'); return;
        }

        if(args.length > 1) {
            try{
                let playLines = [];
                const playName = args.slice(0).join(' ');
                console.log(playName);
                play_data.forEach(line => {
                    if(line.Play == playName) {
                        playLines.push(line);
                    }
                });
                if(playLines.length != 0) {
                    await message.channel.send(`The Play **${playName}** will be starting soon...`);
                    playLines.forEach((line,id) => {
                        setTimeout(async() => {
                            if(line.ActSceneLine) {
                                await message.channel.send(`**${line.Player}**: "${line.PlayerLine}"`)
                            }
                            else {
                                await message.channel.send(`**${line.PlayerLine}**`)
                            }
                        }, 2000*id);		
                    })
                }
                else {
                    await message.channel.send("The selected play was not found.");
                }
            }
            catch (e) {
                console.log("Error: ", e);
            }
            return;
        }
    }
}