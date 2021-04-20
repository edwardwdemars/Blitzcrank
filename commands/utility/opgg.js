module.exports = {
	name: 'opgg',
	description: 'Look something up on op.gg',
	execute(message, args) {
        let command = args[0].toLowerCase();
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}/`);
		} else if (command === 'champ') {
            if(args[1] == null){
                return message.channel.send(`You did not specify a champion, ${message.author}/`)
            }else if(args[2]!=null){
                if(args[2] == "kr"){
                    message.channel.send("https://www.op.gg/champion/" + args[1]);
                }else{
                    message.channel.send("https://" + args[2] + ".op.gg/champion/" + args[1]);
                }
            }else{
			    return message.channel.send('https://na.op.gg/champion/'+args[1]);
            }
        }else if(command === 'user'){
            if(args[1] == null){
                return message.channel.send(`You did not specify a summoner, ${message.author}/`)
            }else if(args[2]!=null){
                if(args[2] == "kr"){
                    message.channel.send("https://op.gg/summoner/userName=" + args[1]);
                }else{
                    message.channel.send("https://" + args[2] + ".op.gg/summoner/userName=" + args[1]);
                }
            }else{
                message.channel.send("https://na.op.gg/summoner/userName=" + args[1]);
            }
        }else if(command === 'multi'){
            if(args[1] == null){
                return message.channel.send(`You did not specify summoners, ${message.author}/`)
            }else{
                let lookup = "";
                for(let i = 1; i<args.length;i++){
                    lookup+=args[i] + "%2C%20"
                }
                message.channel.send("https://na.op.gg/multi/query="+lookup);
            }
        }else{
            let messages = [];
            messages.push("/opgg champ *champ name*: returns statistics about a given champ in North America");
            messages.push("/opgg champ *champ name*: returns statistics about a given champ in a given region");
            messages.push("/opgg user *summoner name*: returns info about a player in North America");
            messages.push("/opgg user *summoner name* *region*: returns info about a player from a certain region");
            messages.push("Use the abbreviated version of a region's name, e.g. na, euw, kr, etc.")
            messages.push("/opgg user *summoner names*: returns info about multiple players");
            messages.push("Do not put any spaces inside summoner names, e.g. King Jebus should be KingJebus");
            let help = "";
            for(let i = 0; i<messages.length;i++){
                help+=messages[i] + "\n"
            }
            return message.channel.send(help);
        }
	},
};