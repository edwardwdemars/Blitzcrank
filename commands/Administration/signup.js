module.exports = {
	name: 'signup',
	description: 'Retrieve the latest battlefly links.',
	execute(message, args) {
		if (!args.length) {
			return message.channel.send(`Please specify an event to signup for!, ${message.author}!`);
		} else if (args[0] === '5v5') {
			return message.channel.send(signups[0]);
		} else if(args[0] === '1v1'){
            return message.channel.send(signups[1]);
        }else if(args[0] === 'TFT' || args[0] === 'tft'){
            return message.channel.send(signups[2]);
        }else if(args[0] === 'LOR' || args[0] === 'lor'){
            return message.channel.send(signups[3]);
        }else if(args[0] === 'help'){
            return message.channel.send("Enter !signup then one of the following commands:\n 5v5: the 5v5 tournament \n 1v1: the 1v1 tournament \n TFT: the Teamfight Tactics tournament\n LOR: the Legends of Runeterra Tournament");
        }else{
            return message.channel.send(`Sorry, there was an error trying to find the link ${message.author}! Please check your spelling or use !signup help for help.`);
        }
	},
};