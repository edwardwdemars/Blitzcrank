module.exports = {
	name: 'joke',
	description: 'Tells a joke',
	execute(message, args) {
        let jokes = [];
        jokes.push("I put the go in golem. That was humor. Other golems find that to be appropriately funny.");
        jokes.push("A rolling golem gathers no rust.");
        jokes.push("https://www.youtube.com/watch?v=GifHpc6go58")
        jokes.push(":robot: ------C")
        let rand = getRndInteger(0, jokes.length);
		message.channel.send(jokes[rand]);
	},
};
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}