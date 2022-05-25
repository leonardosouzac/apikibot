const Discord = require('discord.js');
const prefix = '!sec';

const client = new Discord.Client({
    allowedMentions: {
        parse: [`users`, `roles`],
        repliedUser: true,
    },
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS"
    ],

});

client.on("ready", () => {
    console.log("Apiker está online.")
})


client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command === 'help'){
        message.reply(`!sec chpass-shared novasenha\n!sec chpass-vps novasenha `)
    }})

   // message.channel.send(`Comando: ${command}\n Argumento: ${args}`);


client.login("OTc4ODIyNzcxNzYzMTgzNjU4.GVjEhn.G6If_oKhxmsJ6klj1fJ4R6uUA5TZ9zi-sWrKCg")