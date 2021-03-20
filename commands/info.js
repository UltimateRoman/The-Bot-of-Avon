

module.exports = {
	name: 'info',
	aliases: [],
	description: 'Find information about a particular work of Shakespeare',
	usage: '!info [Name of the work]',
	execute: async(message, args, client)=>{
        if(args.length < 1){
			message.channel.send('Error: the work has not been specified'); return;
        }

        if(args.length >= 1) {
            try {
                const workName = args.slice(0).join(' ');
                const wd = await Works.findOne({ where:{title: workName}});
                
                if(wd) {
                    if(wd.get('pic')) {
                        await message.channel.send(`Title: **${wd.get('longTitle')}** \nYear: **${wd.get('year')}** \nGenre: **${wd.get("genre")}**`, 
                        {files: [wd.get('pic')]});
                        await message.channel.send(wd.get('desc'));
                    }
                    else {
                        await message.channel.send(`Title: **${wd.get('longTitle')}** \nYear: **${wd.get('year')}** \nGenre: **${wd.get("genre")}** \n${wd.get('desc')}`);
                    }
                }

                else {
                    await message.channel.send("The work you had requested could not be found.");
                }
            }
            catch(e) {
                console.log("Error ", e);
            }
            return;
        }
    }
}