module.exports = {
	name: 'taunt',
	description: 'Blitzcrank threatens you',
	execute(message, args) {
		let taunts = []
		taunts.push("The time of man has come to an end.");
		taunts.push("Look. You're leaking.");
		taunts.push("Your steam is escaping.");
		taunts.push("Exterminate. Exterminate.");
		taunts.push("ha ha ha");
		taunts.push("Bone is a poor alternative.")
		taunts.push("Quake in fear, fleshling.")
		let rand = getRndInteger(0,taunts.length);
		message.channel.send(taunts[rand]);
	},
};
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }