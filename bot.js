const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('ready', () => {
    client.user.setStatus('available') // Can be 'available', 'idle', 'dnd', or 'invisible'
    client.user.setPresence({
        game: {
            name: 'LF> Daddy',
            type: 0
        }
    });
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

// BEGINNING OF LAMBOT CODE

var lams = [
    { name: "***Whatever, I'm just gonna go play by myself***" },
    { name: "***I'm ALPHA***" },
    { name: "***Fucking sober tryhards***" },
    { name: "***HeheheHEEHA***" },
    { name: "***You're just a fake gay***" },
    { name: "***Hey wanna get LIT tonight??***" },
    { name: "***Fuck you faggot!***" },
    { name: "***I'm so fucking LIT rn***" },
    { name: "***OMG, I'm gonna puke***" },
    { name: "***HEHE, did you hear that? I farted.***" },
    { name: "***Fuck you!!***" },
    { name: "***I'm not having any of ur shit today***" },
    { name: "***I'm asexual***" },
    { name: "***You fucking BETA***" },
    { name: "***Kill yourself, retard***" }
    
    
]

//choosing a random joke from the array

var lamknock = function() {
    var lam = lams[Math.floor(Math.random() * lams.length)]
    return formatLam(lam)
}

//Formatting the output to return in a new line and plug in the output variables
function formatLam(lam) {
    return [
        
        lam.name
    ].join('\n')
}

//Turn the discordjs on to listen to a message
    client.on('message', (message) => {

//Listens to each instance of the message /knock and executes the code below
        if (message.content.includes('!lam')) {
            const msg = message.content.split(' ');

//Function knock() returns the formatted joke
                message.channel.send(lamknock());

        }
    });  
//END OF LAMBOT CODE

// BEGINNING OF 8BALL CODE

var balls = [
    { name: "**FUCK YES BITCH**" },
    { name: "**Don't fucking do it**" },
    { name: "**Do whatever you want, fuckface**" },
    { name: "**LET'S DO IT!!**" },
    { name: "**I might be gay, but even I'm not gay enough to do that**" },
    { name: "**IDK bitch, do I look a fortune teller?**" },
    { name: "**I don't think that's a good idea**" },
    { name: "**HELLLLL YEAAAAAH**" },
    { name: "**Don't fucking do it**" },
    { name: "**Do whatever you want, fuckface**" },
    { name: "**LET'S DO IT!!**" },
    { name: "**HELLLLL YEAAAAAH**" },
    { name: "**Off yourself**" },
    { name: "**Bad idea, retard**" },
    { name: "**FUCK YES BITCH**" },
    
    
]

//choosing a random joke from the array

var ballknock = function() {
    var ball = balls[Math.floor(Math.random() * balls.length)]
    return formatBall(ball)
}

//Formatting the output to return in a new line and plug in the output variables
function formatBall(ball) {
    return [
        
        ball.name
    ].join('\n')
}

//Turn the discordjs on to listen to a message
    client.on('message', (message) => {

//Listens to each instance of the message /knock and executes the code below
        if (message.content.includes('?!')) {
            const msg = message.content.split(' ');

//Function knock() returns the formatted joke
                message.reply(ballknock());

        }
    });  
//END OF 8BALL CODE

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
