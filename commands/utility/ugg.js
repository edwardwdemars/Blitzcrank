module.exports = {
	name: 'ugg',
	description: 'Look something up on u.gg',
	execute(message, args) {
        let command = args[0].toLowerCase();
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}/`);
		} else if (command === 'champ') {
            if(args[1] == null){
                return message.channel.send(`You did not specify a champion, ${message.author}/`)
            }else{
			    return message.channel.send('https://u.gg/lol/champions/'+args[1]);
            }
        }else if(command === 'user'){
            if(args[1] == null){
                return message.channel.send(`You did not specify a summoner, ${message.author}/`)
            }else if(args[2]/=null){
                    message.channel.send("https://u.gg/lol/profile/" + args[2] + "1/" + args[1]);
            }else{
                message.channel.send("https://u.gg/lol/profile/na1/" + args[1]);
            }
        }else if(command === 'multi'){
            if(args[1] == null){
                return message.channel.send(`You did not specify summoners, ${message.author}/`)
            }else{
                let lookup = "";
                for(let i = 1; i<args.length;i++){
                    if(i == args.length - 1){
                        lookup+=args[i]
                    }else{
                        lookup+=args[i] + ",%20"
                    }
                }
                message.channel.send("https://u.gg/multisearch?summoners="+ lookup + "&region=na1");
            }
        }else{
            let messages = [];
            messages.push("/ugg champ *champ name*: returns statistics about a given champ");
            messages.push("/ugg user *summoner name*: returns info about a player in North America");
            messages.push("/ugg user *summoner name* *region*: returns info about a player from a certain region");
            messages.push("Use the abbreviated version of a region's name, e.g. na, euw, kr, etc.")
            messages.push("/ugg user *summoner names*: returns info about multiple players");
            messages.push("Do not put any spaces inside summoner names, e.g. King Jebus should be KingJebus");
            let help = "";
            for(let i = 0; i<messages.length;i++){
                help+=messages[i] + "\n"
            }
            return message.channel.send(help);
        }
	},
};