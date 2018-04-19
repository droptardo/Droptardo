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
  "Retail Row",
  "Junk Junction",
  "Haunted Hills",
  "Flush Factory",
  "Fatal Fields",
  "Moisty Mire",
  "Lonely Lodge",
  "Wailing Woods",
  "M'Laika",
  "Anarchy Acres",
  "Tomato Town",
  "Salty Springs",
  "Greasy Grove"
];

var lock = function() {
    var loc = locations[Math.floor(Math.random() * locations.length)]
    return lock
}

client.on('message', message => {
    if (message.content === '!drop') {
    	message.reply(lock());
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
