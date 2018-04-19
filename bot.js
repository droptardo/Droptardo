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
    return var(lock)
}

client.on('message', message => {
    if (message.content === '!drop') {
    	message.reply(lock());
  	}
});

// storing jokes in a variable jokes

var jokes = [
    { name: 'Dozen', answer: 'anybody want to let me in?' },
    { name: 'Avenue', answer: 'knocked on this door before?' },
    { name: 'Ice Cream', answer: 'if you don\'t let me in!' },
    { name: 'Adore', answer: 'is between us. Open up!' },
    { name: 'Lettuce', answer: 'in. Its cold out here!' },
    { name: 'Mikey', answer: 'doesnt fit through this keyhole' }
]

//choosing a random joke from the array

var knock = function() {
    var joke = jokes[Math.floor(Math.random() * jokes.length)]
    return formatJoke(joke)
}

//Formatting the output to return in a new line and plug in the output variables
function formatJoke(joke) {
    return [
        'Knock, knock.',
        'Who’s there?',
        joke.name + '.',
        joke.name + ' who?',
        joke.name + ' ' + joke.answer
    ].join('\n')
}

//Turn the discordjs on to listen to a message
    client.on('message', (message) => {

//Listens to each instance of the message /knock and executes the code below
        if (message.content.includes('/knock')) {

//Function knock() returns the formatted joke
                message.reply(knock());

        }
    });  

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
