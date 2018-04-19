const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// storing jokes in a variable jokes

var jokes = [
    { name: 'Tilted Towers' },
    { name: 'Snobby Shores' },
    { name: 'Shifty Shafts' },
    { name: 'Pleasant Park' },
    { name: 'Retail Row' },
    { name: 'Junk Junction' }
]

//choosing a random joke from the array

var knock = function() {
    var joke = jokes[Math.floor(Math.random() * jokes.length)]
    return formatJoke(joke)
}

//Formatting the output to return in a new line and plug in the output variables
function formatJoke(joke) {
    return [
        
        joke.name
    ].join('\n')
}

//Turn the discordjs on to listen to a message
    client.on('message', (message) => {

//Listens to each instance of the message /knock and executes the code below
        if (message.content.includes('!drop')) {
            const msg = message.content.split(' ');

//Function knock() returns the formatted joke
                message.reply(knock());

        }
    });  

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
