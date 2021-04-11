const fs = require('fs')

const content = 'Some content!'

module.exports = {
	name: 'write',
	description: 'Writes text to test.txt',
	execute(message) {
		message.channel.send('Writing text');
        fs.writeFile('../text/test.txt', content, err => {
            if (err) {
              console.error(err)
              return
            }
            //file written successfully
          })
	}
};