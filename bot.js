const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setPresence({ game: { name: 'Off Yourselves', type: 0 };
});

client.on('message', message => {
    if (message.content === '!hello') {
    	message.reply('Off yourself');
  	}
});


// BEGINNING OF DROPBOT CODE

var jokes = [
    { name: 'Tilted Towers' },
    { name: 'Tilted Towers' },
    { name: 'Snobby Shores' },
    { name: 'Shifty Shafts' },
    { name: 'Shifty Shafts' },
    { name: 'Shifty Shafts' },
    { name: 'Pleasant Park' },
    { name: 'Pleasant Park' },
    { name: 'Pleasant Park' },
    { name: 'Retail Row' },
    { name: 'Retail Row' },
    { name: 'Retail Row' },
    { name: 'Haunted Hills' },
    { name: 'Flush Factory' },
    { name: 'Fatal Fields' },
    { name: 'Moisty Mire' },
    { name: 'Lonely Lodge' },
    { name: 'Lonely Lodge' },
    { name: 'Lonely Lodge' },
    { name: 'Wailing Woods' },
    { name: "M'Laika" },
    { name: 'Anarchy Acres' },
    { name: 'Tomato Town' },
    { name: 'Salty Springs' },
    { name: 'Salty Springs' },
    { name: 'Greasy Grove' },
    { name: 'Greasy Grove' },
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
//END OF DROPBOT CODE

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
