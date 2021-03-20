const play_data = require('../pdata.json');

module.exports = {
	name: 'play',
	aliases: [],
	description: 'Start a particular Play',
	usage: '!play [Play name]',
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
                    await message.channel.send("**Play Starting...**");
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
                    await message.channel.send("Selected Play was not found.");
                }
            }
            catch (e) {
                console.log("Error: ", e);
            }
            return;
        }
    }
}