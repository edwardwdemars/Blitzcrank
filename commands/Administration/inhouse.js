module.exports = {
	name: 'inhouse',
	description: 'Sends a new inhouse message',
    clientPermissions: ['ADMINISTRATOR'],
	execute(message, args) {
        let role = "<@&" + 829835977554919424 + ">";
		if(args[1] != null){
            return message.channel.send(role + " Anyone who plans on playing in the in house at " + args[0] + " pm " + args[1] + " react with :thumbsup:")
        }else if(args[0] == "help"){
            return message.channel.send("First parameter sets the time, second parameter sets the day");
        }else if(args[0] != null){
            return message.channel.send(role + " Anyone who plans on playing in the in house at " + args[0] + " pm react with :thumbsup:")
        }else{
            return message.channel.send(role + " Anyone who plans on playing in the in house react with :thumbsup:");
        }
	},
};