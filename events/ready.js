module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);
		for(let i = 0; i<4;i++){
			signups[i]="Admins, please add a battlefly link for event " + (i+1) + "!";
		}	
	},
};