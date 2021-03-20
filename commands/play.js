const play_data = require('../pdata.json');
const Works = require('../ckdatabase');
let fl;

module.exports = {
	name: 'play',
	aliases: [],
	description: 'Start performing a particular Play',
	usage: '!play [Name of the Play]',
	execute: async(message, args, client)=>{
        if(args.length < 1){
			message.channel.send('Error: play name not specified'); return;
        }

        if(args.length >= 1) {
            try{
                let playLines = [];
                const playName = args.slice(0).join(' ');

                if(playName == "-stop") {
                    console.log(fl);
                    clearTimeout(fl);
                    message.channel.send("Stopping the play, Thank you.")
                    return;
                }

                play_data.forEach(line => {
                    if(line.Play == playName) {
                        playLines.push(line);
                    }
                });

                if(playLines.length != 0) {
                    console.log("Playing ", playName);
                    const picL = await Works.findOne({ where:{title: playName}});
                    await message.channel.send("@here The Play **"+playName+"** will be starting soon...", {files: [picL.get('pic')]});
                    fl = setTimeout(async()=> {
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
                    }, 3000);
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