const Discord = require("discord.js");
const config = require("./config.json");
const teste = require("./exec.js");

const client = new Discord.Client({
  allowedMentions: {
    parse: [`users`, `roles`],
    repliedUser: true,
  },
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"],
});

client.on("ready", () => {
  console.log("Apiker está online.");
});

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "help") {
    message.reply(`!sec chpass-shared novasenha\n!sec chpass-vps novasenha `);
    return;
  }
  if (command === "chpass-shared") {
    console.log(args[0].length);
    if (!args.length) {
      return message.channel.send(
        `Você esqueceu de adicionar a nova senha, ${message.author}`
      );
    } else if (args[0].length < 8) {
      return message.channel.send(
        "A nova senha deve conter no mínimo 8 digitos."
      );
    } else {
      message.channel.send(
        `A nova senha do usuário apiki para servidores shareds é: ${args[0]}`
      );
    }

  }
});

// message.channel.send(`Comando: ${command}\n Argumento: ${args}`);

client.login(config.token);
