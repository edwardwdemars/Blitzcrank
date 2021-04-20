module.exports = {
	name: 'helpme',
	description: 'Gives list of commands',
	execute(message, args) {
		let commands = [];
        commands.push("Commands with a * have their own help command");
        commands.push("/opgg: seach things on op.gg*");
        commands.push("/ugg: seach things on u.gg*");
        commands.push("/coinflip: flip a coin*");
        commands.push("/elo: gives the elo of in-house players*");
        commands.push("/joke: Blitzcrank tells you a joke");
        commands.push("/taunt: Blitzcrank threatens you");
        commands.push("/beep: boop");
        commands.push("Admin only:");
        commands.push("/inhouse: creates a new in-house message*");
        commands.push("If anything goes terribly, horribly wrong, contact Edward DeMars/AmericanHussar")
        let string = "";
        for(let i = 0; i<commands.length; i++){
            string+=commands[i] + "\n";
        }
        return message.channel.send(string);
	},
};