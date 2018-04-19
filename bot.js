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

var locations = [
  "Tilted Towers",
  "Snobby Shores",
  "Shifty Shafts",
  "Pleasant Park",
  "Retail Row"
]

var randomLocation = locations[Math.floor(Math.random() * locations.length)];

console.log(randomLocation);

client.on('message', message => {
    if (message.content === '!drop') {
    	message.reply(randomLocation);
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
