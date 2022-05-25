const child = require("child_process");
const discord = require("discord.js");

module.exports = class shell {
  constructor(
    discord_client,
    discord_notification_channel,
    _log_file,
    ansible_dir,
    ansible_uri
  ) {
    async (client, message, args) => {
      child.exec(command, (err, res) => {
        if (err) return console.log(err);
        message.channel.send(res.slice(0, 2000), {
          code: "js",
        });
      });
    };
  }
};
