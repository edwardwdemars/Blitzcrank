module.exports = {
	name: 'birthday',
	description: 'Wishes a Happy Birthday!',
	execute(message, args) {
		if (!args.length) {
                return message.channel.send("Happy Birthday!")
		}else if (args[0] != null) {
			return message.channel.send("Happy birthday " + args[0] + "!");
        }
	},
};