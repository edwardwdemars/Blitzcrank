module.exports = {
	name: 'elo',
	description: 'Gets the elo of an inhouse player',
	execute(message, args) {
        const fs = require('fs');
        let fileContents = fs.readFileSync('./ELO.txt', 'utf8');
        fileContents = fileContents.split('\n');
        names = [];
        nums = [];
        for(let i = 0; i<fileContents.length; i++){
            names[i] = fileContents[i].substring(0, fileContents[i].indexOf(":")+1);
            nums[i] = fileContents[i].substring(fileContents[i].indexOf(":")+1);
            nums[i] = Math.round(nums[i]);
        }
        if(args[0] == 'all'){
            let string = "";
            for(let i = 0; i<names.length; i++){
                string+=names[i] + " " + nums[i];
            }
            return message.channel.send(string);
        }else{
            let index =-1;
            if(!args.length){
                for(let i = 0; i<fileContents.length; i++){
                    if(names[i].toLowerCase().includes((message.author.username).toLowerCase())){
                        index = i;
                    }
                }
            }else if(args[0] == "help"){
                return message.channel.send("Enter no parameters to search for yourself, a specific player to search for them, or all to see all player's elo")
            }else{
                let name = "";
                for(let i = 0; i<args.length; i++){
                    if(i == args.length-1){
                        name+=args[i];
                    }else{
                        name+=args[i] + " ";
                    }
                }
                for(let i = 0; i<fileContents.length; i++){
                    if(names[i].toLowerCase().includes(name.toLowerCase())){
                        index = i;
                    }
                }
            }
            if(index == -1){
                return message.channel.send("Sorry, no player with that name was found on the list")
            }else{
                return message.channel.send(names[index] + " " + nums[index]);
            }
        }
	},
};
