const Discord = require('discord.js');
const config = require('./config.json');
const shell = require('./run_commands.js');

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
    global.shell = new shell (client);
})


client.on('message', message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'help') {
        message.reply(`!sec chpass-shared novasenha\n!sec chpass-vps novasenha `)
        return;
    }
    if (command === 'chpass-shared') {
        console.log(args[0].length)
        if (!args.length) {
            return message.channel.send(`Você esqueceu de adicionar a nova senha, ${message.author}`);
        } else if (args[0].length < 8) {
            return message.channel.send('A nova senha deve conter no mínimo 8 digitos.');
        } else {
            message.channel.send(`A nova senha do usuário apiki para servidores shareds é: ${args[0]}`);
        }
    }
    
    let command_to_run = 'uptime';
    switch (args[1]) {
        case 'disk_free':
            command_to_run = 'df -h /';
            break
        case 'docker_status':
            command_to_run = "docker ps -a --format  {%raw%}'{{.Names}} {{.Status}}'{%endraw%}";
            break
        default:
            command_to_run = 'uptime';
            break;
    }
    let data = {
        playbook: `playbooks/command`,
        extra_vars: {
            "ansible_ssh_host": regData[0].ip,
            "taskLogDir": process.env.TASK_LOG_DIR,
            "tokenID": currentID,
            "command_to_run": command_to_run
        }
    }
    message.reply('Ok executando.. ');
    this.playbook(data, false, ['debug'], 'ansible-playbook.log', 'command', message.id);



})

// message.channel.send(`Comando: ${command}\n Argumento: ${args}`);


client.login(config.token)