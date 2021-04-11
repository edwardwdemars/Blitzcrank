module.exports = {
	name: 'coinflip',
	description: 'Flips a coin',
	execute(message, args) {
        let coin = getRndInteger(0,2);
		if (!args.length) {
            if(coin == 0){
                return message.channel.send("Heads")
            }else if(coin == 1){
                return message.channel.send("Tails")
            }
		}else if (args[1] == null) {
			return message.channel.send("Enter either 0 or 2 parameters");
		}else{
            if(coin == 0){
                return message.channel.send(args[0]);
            }else if(coin == 1){
                return message.channel.send(args[1]);
            }
        }

	},
};
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }